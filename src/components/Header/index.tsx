import { Search, Analytics } from './svg';
import { useState } from 'react';

const Header = () => {
    const [searchColor, setSearchColor] = useState<string>('');
    const [analyticsColor, setAnalyticsColor] = useState<string>('');


    return (
        <header className='flex justify-between items-center h-[60px] xs:px-[40px] px-[20px] bg-dim-white'>
            <div className='flex justify-between items-center h-[40px] w-full'>
                <h1 className='text-[29px] text-dim-bluePrimary hidden sm:block'>Jobs</h1>
                <div className='flex sm:gap-4 gap-0'>
                    <button
                        className='flex items-center gap-x-2 hover:text-dim-bluePrimary ease-in duration-[15ms] px-2 xs:px-[16px] xs:py-[10px]'
                        onMouseEnter={() => setSearchColor('#2A85FF')}
                        onMouseLeave={() => setSearchColor('')}
                    >
                        <Search color={searchColor} />
                        <p className='hidden xs:block'>Job search</p>
                    </button>
                    <button
                        className='flex items-center gap-x-2 hover:text-dim-bluePrimary ease-in duration-[15ms] px-2 xs:px-[16px] xs:py-[10px]'
                        onMouseEnter={() => setAnalyticsColor('#2A85FF')}
                        onMouseLeave={() => setAnalyticsColor('')}
                    >
                        <Analytics color={analyticsColor}/>
                        <p className='hidden xs:block'>Analytics</p>
                    </button>
                </div>
                <img src="/img/ProfileImage.png" alt="Profile image" className='w-[40px] h-[40px]' />
            </div>
        </header>
    )
}

export default Header;