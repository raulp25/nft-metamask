import type { GetServerSideProps } from 'next'
import { Navbar } from '../../components/ui/NavBar';
import { CollectionItem } from '../../components/collections/CollectionItem';
import { Collection } from '../../typings';

import { sanityClient } from '../../sanity';


interface Props {
  collections: Collection[];
};

const Collections = ({ collections }: Props) => {

  return (
      <div className='collections-super-container'>
          <Navbar/>

          <div className="max-w-7xl md:mt-10 mx-auto flex flex-col min-h-screen universal-padding-top px-10 2xl:px-0">
              <h1 className='mb-10 text-4xl pt-2 font-extralight'>
                  The{' '}  
                  <span className='font-extrabold underline decoration-pink-600/50'> 
                  JETZEMANI 
                  </span>{' '} 
                  NFT Market Place
              </h1>
              {/* //HERO GRAY CONTAINER AND CARD */}
              <main className='bg-slate-100 px-5 py-10 shadow-xl shadow-black-400/20'>
                  <div className='grid space-x-3 card-grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 '>
                      {collections.map(collection => (
                      <CollectionItem collection={collection} key={collection._id} />
                      ))}
                  </div>
              </main>
          </div>
      </div>
    )
}

export default Collections;

export const getServerSideProps: GetServerSideProps = async() => {
  const query = `*[_type == "collection"]{
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

  const collections = await sanityClient.fetch(query);

  return {
    props: {
      collections
    }
  }

};