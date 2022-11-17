import { NftContext } from '../../context';
import { useContext, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Link from 'next/link';
import { Navbar, GridNfts } from '../../components';
import { Collection } from '../../typings';

import { sanityClient } from '../../sanity';
import { useContract, useNFTs, useMintNFT } from '@thirdweb-dev/react';
  
interface Props{
    collection: Collection
};

  export const All = ({collection}:Props) => {
    const {setNFTCardState, NFTCardState} = useContext(NftContext);

    const { contract  } = useContract(collection.address, "nft-drop");
    const { data:nfts, isLoading: isReadingNfts } = useNFTs(contract);
    const { mutate: mintNFT, isLoading: isMintingNFT } = useMintNFT(contract);
    const getPrice = async(contract:any) => {
    const gasCostInGwei = await contract?.estimator.currentGasPriceInGwei();
    }

    useEffect(() => {
       if (!nfts) return; 
       
      setNFTCardState({collection, nfts});
      
    }, [nfts])

    useEffect(() => {    
      getPrice(contract);
    }, []);
    
    return ( //HEADER AND HERO TEXT 
        <div className=' bg-white text-white '> 
            <Navbar/>
            <section className='max-w-7xl mx-auto universal-padding-top'>
                <div className='flex items-center gap-6 border-red-500'>
                    <Link  href={'/'}>
                        <svg className='cursor-pointer' width="112" height="200" viewBox="0 0 1126 700" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.06915 58.8968C-8.14591 30.5859 12.7549 0 43.3414 0H233.233C251.075 0 266.878 10.6166 273.505 27.047L424.654 404.189C428.732 414.3 428.732 425.675 424.654 436.039L329.58 672.89C315.052 709.037 263.564 709.037 249.036 672.89L3.06915 58.8968ZM369.861 57.6329C359.665 29.5748 380.566 0 410.643 0H576.065C594.416 0 610.729 11.3749 616.846 28.3109L754.231 405.453C757.544 414.805 757.544 425.169 754.231 434.775L671.647 661.515C657.883 699.431 603.847 699.431 590.083 661.515L369.861 57.6329ZM741.233 0C710.646 0 689.746 30.5859 700.961 58.8968L946.927 672.89C961.456 709.037 1012.94 709.037 1027.47 672.89L1122.54 436.039C1126.62 425.675 1126.62 414.3 1122.54 404.189L971.396 27.047C964.769 10.6166 948.966 0 931.124 0H741.233Z" fill="url(#paint0_linear_215_66)"/>
                            <defs>
                            <linearGradient id="paint0_linear_215_66" x1="563.567" y1="-165.278" x2="1341.59" y2="881.403" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#13f256"/>
                            <stop offset="1" stop-color="#5204BF"/>
                            </linearGradient>
                            </defs>
                        </svg>
                    </Link>
                    
                    <div >
                        <h1 className='flex flex-col text-4xl font-extralight text-black'>
                        <span className='text-8xl font-thin'>NFT</span>
                        JETZEMANI DOG ITEMS</h1>
                    </div>
                </div>
            </section> 
            {/* //NFT CARDS GRID  */}
            <div className='flex flex-col min-h-screen'>
                {isReadingNfts ? (
                  <img className='mx-auto ethereum-gif pt-24' src="/ethereum.gif" alt="ethereum gif" />
                ) : (
                  <GridNfts />
                )}
            </div>
        </div>
    );
  }
  export default All
  
  export const getServerSideProps: GetServerSideProps  = async({params}) => {
    const query = `*[_type == "collection" && slug.current == $id][0]{
        _id,
        title,
        address,
        description,
        nftCollectionName,
        mainImage{
          asset
        },
        previewImage{
          asset
        },
        slug {
          current
        },
        creator-> {
          _id,
          name,
          address,
          slug {
            current
          },
        }
      }`;
      
    const collection = await sanityClient.fetch(query,{
        id: params?.id
    });

    if (!collection){
        return {
            notFound: true
        }
    }

    return {
        props: {
            collection,
        }
    }
}