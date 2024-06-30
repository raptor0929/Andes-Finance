import { baseSepolia } from 'viem/chains';
import { generateContractHook } from '@/hooks/contracts';
import InstallmentLoanABI from './InstallmentLoanABI';

/**
 * Returns contract data for the InstallmentLoan contract.
 */
export const useInstallmentLoanContract = generateContractHook({
  abi: InstallmentLoanABI,
  [baseSepolia.id]: {
    chain: baseSepolia,
    address: '0x346E69073BE72D03806504E9434c5e6811d33f43',
  },

  // ... more chains for this contract go here
});
