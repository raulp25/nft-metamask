import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Navbar = () => {
    const {asPath} = useRouter();
    const [hasOverflow, sethasOverflow] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    const onLogout = () => {
        document.body.classList.remove('overflow_y');
    };

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.classList.toggle('overflow_y');
        sethasOverflow(!hasOverflow);
    };


    return (
        <nav className={`nav ${hasOverflow ? 'nav_margin' : 'nav_no-margin'}`}>
            <div className='logo'>
                <Link href={'/'}>
                    <div className='flex items-center cursor-pointer'>
                        <div className='  h-fit'>
                            <img src="/ethereum-cash.svg" className='nav_logo-ethereum img_login-1' alt="spinning-ethereum-logo" />
                        </div>
                        <div className='next-nav-text ethereum-nav-logo pl-2'>
                            <p>NFT NEXTJS</p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className={`menu_btn ${isMenuOpen ? 'open' : ''}`}
                 onClick={handleMenuClick}
            >
                <div className='menu_btn-burger'></div>
            </div>
            <ul className={`ul ${isMenuOpen ? 'ul_open' : ''}`}>
                <li className={`li ${isMenuOpen ? 'li_open' : ''}`}
                    onClick={handleMenuClick}
                >
                    <Link href={'/'}
                          onClick={() => {
                              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                          }}
                    >
                        <p className={`nav_link nav_link-1 nav-link-border font-bold cursor-pointer ${asPath === '/' ? 'text-green-300' : 'transition-all duration-200 hover:text-green-300' }`}>
                            Home
                        </p>
                    </Link>
                </li>
                <li className={`li ${isMenuOpen ? 'li_open' : ''}`}
                    onClick={handleMenuClick}
                >
                    <Link href={'/collections'}
                          onClick={() => {
                              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                          }}
                    >
                        <p className={`nav_link nav_link-1 nav-link-border font-bold cursor-pointer ${asPath === '/collections' ? 'text-green-300' : 'transition-all duration-75 hover:text-green-300' }`}>
                            Collection
                        </p>
                    </Link>
                </li>

                <li className={`li ${isMenuOpen ? 'li_open' : ''}`}
                    onClick={handleMenuClick}
                >
                    <Link href={'/nft/jetzemani-dogs'}
                          onClick={() => {
                              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                          }}
                    >
                        <p className={`nav_link nav_link-2 font-bold nav-link-border cursor-pointer ${asPath === '/nft/jetzemani-dogs' ? 'text-green-300' : 'transition-all duration-200 hover:text-green-300'}` }>
                            Mint Drop
                        </p>
                    </Link>
                </li>

                <li className={`li ${isMenuOpen ? 'li_open' : ''}`}
                    onClick={handleMenuClick}
                >
                    <Link href={'/all/jetzemani-dogs'}
                          onClick={() => {
                              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                          }}
                    >
                        <p className={`nav_link nav_link-2 font-bold nav-link-border cursor-pointer ${asPath === '/all/jetzemani-dogs' ? 'text-green-300' : 'transition-all duration-200 hover:text-green-300' }`}>
                            JD Dog Items
                        </p>
                    </Link>
                </li>
                <li className={`li ${isMenuOpen ? 'li_open' : ''}`}
                    onClick={handleMenuClick}
                >
                    <Link href={'/guide'}
                          onClick={() => {
                              window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
                          }}
                    >
                        <p className={`nav_link nav_link-2 font-bold nav-link-border cursor-pointer ${asPath === '/guide' ? 'text-green-300' : 'transition-all duration-200 hover:text-green-300' }`}>
                            Guide
                        </p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}