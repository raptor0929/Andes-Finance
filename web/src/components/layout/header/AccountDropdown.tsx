import { Name } from '@coinbase/onchainkit/identity';
import { Avatar } from '@nextui-org/react';
import { Snippet } from '@nextui-org/snippet';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useBiconomy } from '@/context/BiconomyContext';
import { AccountInfoPanel } from './AccountInfoPanel';

export function AccountDropdown() {
  const { smartAccountAddress: address } = useBiconomy();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <div className=" p-2">
          {address && (
            <div className="flex items-center gap-2">
              <Avatar
                src="https://yt3.googleusercontent.com/9OW-1uDGtjji2NY0Axp_9xV_IxbbDsT08aYtRE-d_GEn_aHwqPfN6NoW1sIyyYH6yfC3UgkK=s176-c-k-c0x00ffffff-no-rj"
                className="h-8 w-8 text-tiny"
              />
              <Snippet
                disableTooltip
                hideSymbol
                codeString={`0x${address.slice(2)}`}
                className="-p-2 bg-transparent"
              >
                <Name address={`0x${address.slice(2)}`} className="text-black" />
              </Snippet>
            </div>
          )}
        </div>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={40}
          className="z-20 -mt-10 rounded-lg bg-neutral-900 bg-opacity-90 px-6 pb-2 pt-6 shadow backdrop-blur-2xl"
        >
          <AccountInfoPanel />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
