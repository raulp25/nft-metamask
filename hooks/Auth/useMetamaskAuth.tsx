import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react';


export const useMetamaskAuth = () => {
        const connectWithMetamask = useMetamask();
        const address             = useAddress();
        const disconnect          = useDisconnect();
        const handleLogState = () => {
            address ? disconnect() : connectWithMetamask(); 
        }

    return {
        connectWithMetamask,
        disconnect,
        address,
        handleLogState,
    }
}
