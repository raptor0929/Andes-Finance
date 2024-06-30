import { baseSepolia } from 'viem/chains';
import { generateContractHook } from '@/hooks/contracts';
import { INSTALLMENT_LOAN_CONTRACT_ADDRESS } from '../constants';
import InstallmentLoanABI from './InstallmentLoanABI';

/**
 * Returns contract data for the InstallmentLoan contract.
 */
export const useInstallmentLoanContract = generateContractHook({
  abi: InstallmentLoanABI,
  [baseSepolia.id]: {
    chain: baseSepolia,
    address: INSTALLMENT_LOAN_CONTRACT_ADDRESS,
  },

  // ... more chains for this contract go here
});
