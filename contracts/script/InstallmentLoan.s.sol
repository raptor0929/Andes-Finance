// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import {Script, console2} from "forge-std/Script.sol";
import "../src/InstallmentLoan.sol";

contract InstallmentLoanScript is Script {
    function setUp() public {}

    function run() public {
        uint256 privateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(privateKey);
        InstallmentLoan installmentLoan = new InstallmentLoan();
        vm.stopBroadcast();
        console2.log("InstallmentLoan address: ", address(installmentLoan));
    }
}
