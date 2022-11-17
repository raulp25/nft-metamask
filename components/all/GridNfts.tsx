import { useContext } from 'react';
import { NftContext } from '../../context';
import { NftCard } from './NftCard';


export const GridNfts = () => {
  
  const {NFTCardState} = useContext(NftContext);
  const {collection,nfts} = NFTCardState;

  return (
    <main className=' custom-background py-10 flex justify-center'>
        <div className=' grid py-10 sm:py-10 gap-y-10 sm:gap-y-16 justify-items-center custom-background_items items-center justify-center grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 2xl:grid-cols-4'>
          { nfts?.map((nft, idx) => (
            <NftCard collection={collection} nfts={nfts} rest = {{nft,idx}} key={nft.metadata.id}/>
          ))}
        </div>
    </main>
  )
}
