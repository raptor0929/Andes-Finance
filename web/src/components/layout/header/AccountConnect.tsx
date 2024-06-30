"use client"
import { Link, Button } from '@nextui-org/react';
import { usePrivy } from '@privy-io/react-auth';
import { useTranslation } from 'react-i18next';
import { baseSepolia } from 'viem/chains';
import { useChainId } from 'wagmi';
import { AccountDropdown } from './AccountDropdown';
import { AccountInfoPanel } from './AccountInfoPanel';

/**
 * AccountConnect
 *  - Connects to the wallet
 *  - Disconnects from the wallet
 *  - Displays the wallet network
 */
function AccountConnect() {
  const chainId = useChainId();
  const { t } = useTranslation();
  const { ready, authenticated, login, logout } = usePrivy();
  const handleStart = () => {
    if (!authenticated) login();
  };

  return (
    <div
      className="flex flex-grow"
      {...(!ready &&
        authenticated && {
          'aria-hidden': true,
          style: {
            opacity: 0,
            pointerEvents: 'none',
            userSelect: 'none',
          },
        })}
    >
      {(() => {
        if (!authenticated) {
          return (
            <Button
              as={Link}
              color="primary"
              href="#"
              size="lg"
              radius="full"
              variant="bordered"
              className="text-black "
              onClick={handleStart}
            >
              {t('navbar.logIn')}
            </Button>
          );
        }

        if (ready && authenticated && chainId !== baseSepolia.id) {
          return (
            <button onClick={logout} type="button">
              Wrong network
            </button>
          );
        }

        return (
          <>
            <div className="flex flex-grow flex-col md:hidden">
              <AccountInfoPanel />
            </div>
            <div className="flex hidden md:block">
              <AccountDropdown />
            </div>
          </>
        );
      })()}
    </div>
  );
}

export default AccountConnect;
