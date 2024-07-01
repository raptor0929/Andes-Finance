import { useCallback } from 'react';
import { Avatar, Name } from '@coinbase/onchainkit/identity';
import { Snippet, Divider } from '@nextui-org/react';
import { ExitIcon } from '@radix-ui/react-icons';
import { useAccount, useDisconnect } from 'wagmi';

export function AccountInfoPanel() {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const handleDisconnectWallet = useCallback(() => {
    disconnect();
  }, [disconnect]);

  if (!address) return null;

  return (
    <>
      <div className="mb-4 inline-flex items-center justify-start gap-2 ">
        <Avatar address={address} className="h-10 w-10 rounded-full" />
        <div className="inline-flex flex-col items-start justify-center gap-1">
          <div className="font-inter w-32 text-base font-medium text-white">
            <Snippet
              hideSymbol
              variant="bordered"
              className="border-none text-white"
              codeString={address}
            >
              <Name address={address} />
            </Snippet>
          </div>
        </div>
      </div>
      <Divider className="bg-white" />
      <button
        type="button"
        aria-label="Disconnect"
        className="my-4 inline-flex items-center justify-between self-stretch"
        onClick={handleDisconnectWallet}
      >
        <span className="font-inter w-32 text-left text-base font-medium text-danger">
          Disconnect
        </span>
        <ExitIcon className="relative mr-1 h-4 w-4 text-danger" />
      </button>
    </>
  );
}
