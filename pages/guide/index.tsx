import { NftContext } from '../../context';
import { useContext,useEffect } from 'react';
import { GetServerSideProps } from 'next';
import { Navbar, GuidePage  } from '../../components';
import { Collection, GuideImages } from '../../typings';

import { sanityClient } from '../../sanity';
import { useContract } from '@thirdweb-dev/react';


interface Props {
  guide: GuideImages[];
  collection: Collection[];
};


export const Guide = ({guide, collection}:Props) => {
  
  const { setClaimedSupply, setTotalSupply }= useContext(NftContext);
  const nftDrop = useContract(collection[0].address, "nft-drop").contract;
  const [guides] = guide;

  const fetchNFTDropData = async() => {
    if(!nftDrop) return;
    const claimed = await nftDrop.getAllClaimed();
    const total = await nftDrop.totalSupply();
    setClaimedSupply(claimed.length);
    setTotalSupply(total);
};

useEffect(() => {
    if(!nftDrop) return;

    fetchNFTDropData();

}, [nftDrop]);


  return (
      <div className='guide-super-container '>
          <Navbar/>
          <GuidePage guides={guides} />
      </div>
  )
}


export default Guide


export const getServerSideProps: GetServerSideProps  = async() => {
  const query = `*[_type == "guide"]{
    guide1{
      asset
    },
guide2{
      asset
    },
guide3{
      asset
    },
guide4{
      asset
    },
guide5{
      asset
    },
guide6{
      asset
    },
guide7{
      asset
    },
guide8{
      asset
    },
guide9{
      asset
    },
guide10{
      asset
    },
guide11{
      asset
    },
guide12{
      asset
    },
guide13{
      asset
    },
   
  }`;
  
  const query2 = `*[_type == "collection"]{
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
  

const guide = await sanityClient.fetch(query);
const collection = await sanityClient.fetch(query2);


if (!collection){
    return {
        notFound: true
    }
}

  if (!guide){
      return {
          notFound: true
      }
  }

  return {
      props: {
          guide,
          collection
      }
  }
}
