import Link from 'next/link';
import { Collection } from '../../typings';

import { urlFor } from '../../sanity';

interface Props {
  collection: Collection;
};

export const CollectionItem = ({collection}:Props) => {
    return (
        <Link href={`/all/${collection.slug.current}`} >
            <div className='flex flex-col items-center collection-card-container cursor-pointer transition-all duration-200 hover:scale-105 bg-gradient-to-br from-green-400 to-indigo-600 p-1 rounded-2xl'>
                <img className='h-64 w-full rounded-t-2xl object-cover' src={urlFor(collection.mainImage).url()} alt="collection-card" />

                <div className='  rounded-b-2xl bg-gray-800 collection-text-container'>
                    <div className='py-10 px-5 lg:px-7'>
                        <h2 className='text-xl font-bold text-white' >{collection.title}</h2>
                        <p className='mt-2 text-sm text-gray-300' >{collection.description}</p>
                    </div>
                    <div className='flex justify-end w-full'>
                        <img className='w-8 h-8' src="/verified.png" alt="verified-collection" />
                    </div>
                </div>
            </div>
        </Link>
    )
}   
 