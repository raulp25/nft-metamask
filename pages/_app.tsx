
import type { AppProps } from 'next/app';
import { NftProvider } from '../context/NftProvider';
import '../styles/globals.css';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';


function MyApp({ Component, pageProps }: AppProps) {
  return (
       <NftProvider>
        <ThirdwebProvider desiredChainId={ChainId.Goerli}>
            <Component {...pageProps} />
          </ThirdwebProvider>
       </NftProvider>
      
    
  )}

export default MyApp;


