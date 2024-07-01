// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Address} from "@openzeppelin/contracts/utils/Address.sol";

/**
 * @title InstallmentLoanContract
 * @dev This contract allows users to take loans and set payment installments.
 */
contract InstallmentLoan {
    using SafeERC20 for IERC20;
    using Address for address;

    struct Loan {
        uint256 amount;
        uint256 interestRate;
        uint256 totalRepayment;
        uint256 monthlyInstallment;
        uint256 duration;
        uint256 startTime;
        uint256 nextPaymentDue;
        uint256 paidAmount;
    }

    mapping(address => Loan) public loans;

    address public admin;
    IERC20 public stablecoin;
    uint256 public constant INTEREST_RATE = 2; // 2% interest rate per month

    event LoanTaken(address indexed borrower, uint256 amount, uint256 totalRepayment, uint256 duration);
    event PaymentMade(address indexed borrower, uint256 amount);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Caller is not the admin");
        _;
    }

    constructor() {
        admin = msg.sender;
        stablecoin = IERC20(0x036CbD53842c5426634e7929541eC2318f3dCF7e); // Circle USDC stable coin on Base Sepolia
    }

    /**
     * @notice Take a loan from the platform
     * @param _amount The amount of stablecoin to borrow
     * @param _duration The duration of the loan in months
     */
    function takeLoan(uint256 _amount, uint256 _duration) external {
        require(loans[msg.sender].amount == 0, "Existing loan must be repaid first");
        require(_amount > 0, "Loan amount must be greater than zero");
        require(_duration > 0 && _duration <= 12, "Loan duration must be between 1 and 12 months");

        uint256 totalRepayment = _amount + ((_amount * INTEREST_RATE * _duration) / 100);
        uint256 monthlyInstallment = totalRepayment / _duration;

        loans[msg.sender] = Loan({
            amount: _amount,
            interestRate: INTEREST_RATE,
            totalRepayment: totalRepayment,
            monthlyInstallment: monthlyInstallment,
            duration: _duration,
            startTime: block.timestamp,
            nextPaymentDue: block.timestamp + 30 days,
            paidAmount: 0
        });

        stablecoin.safeTransfer(msg.sender, _amount);
        emit LoanTaken(msg.sender, _amount, totalRepayment, _duration);
    }

    /**
     * @notice Make a payment for the loan
     * @param _amount The amount to pay
     */
    function makePayment(uint256 _amount) external {
        Loan storage loan = loans[msg.sender];
        require(loan.amount > 0, "No active loan found");
        require(_amount > 0, "Payment amount must be greater than zero");
        require(block.timestamp >= loan.nextPaymentDue, "Payment not yet due");
        require(_amount <= loan.totalRepayment - loan.paidAmount, "Payment exceeds remaining balance");

        loan.paidAmount += _amount;
        loan.nextPaymentDue += 30 days;

        if (loan.paidAmount >= loan.totalRepayment) {
            delete loans[msg.sender];
        }

        stablecoin.safeTransferFrom(msg.sender, address(this), _amount);
        emit PaymentMade(msg.sender, _amount);
    }

    /**
     * @notice Get the loan details of a borrower
     * @param _borrower The address of the borrower
     * @return Loan details of the borrower
     */
    function getLoanDetails(address _borrower) external view returns (Loan memory) {
        return loans[_borrower];
    }

    /**
     * @notice Withdraw the stablecoins from the contract
     * @param _amount The amount of stablecoin to withdraw
     */
    function withdrawStablecoin(uint256 _amount) external onlyAdmin {
        stablecoin.safeTransfer(admin, _amount);
    }
}
