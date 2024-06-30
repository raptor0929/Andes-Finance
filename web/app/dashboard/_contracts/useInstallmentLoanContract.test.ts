import { baseSepolia } from 'viem/chains';
import InstallmentLoanABI from './InstallmentLoanABI';
import { useInstallmentLoanContract } from './useInstallmentLoanContract';

describe('useInstallmentLoanContract', () => {
  it('should return correct contract data', () => {
    const contract = useInstallmentLoanContract();
    expect(contract).toEqual({
      abi: InstallmentLoanABI,
      address: '0x346E69073BE72D03806504E9434c5e6811d33f43',
      status: 'ready',
      supportedChains: [baseSepolia],
    });
  });
});
