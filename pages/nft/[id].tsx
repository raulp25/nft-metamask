import { GetServerSideProps } from 'next';
import { useMintCollection } from '../../hooks/useMintCollection';
import { Navbar, NFTPage } from '../../components';
import { Collection } from '../../typings';

import { sanityClient } from '../../sanity';

interface Props{
    collection: Collection
};


export const NFTDropPage = ({collection}:Props) => {
    // custom hook 
    const rest = useMintCollection<Collection>( collection );
  return (
    <div>
        <Navbar/>
        <NFTPage collection={collection} rest={rest}/>
    </div>
  )
}
export default NFTDropPage

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
            collection
        }
    }
}