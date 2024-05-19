import RangeSalary from "./RangeSalary";
import CompanySize from "./CompanySize";
import CompanyRating from "./CompanyRating";
import Industry from "./Industry";
import { useState, useEffect } from "react";

const Aside = () => {
    const [isModal, setIsModal] = useState<boolean>(false);
    const [isArrow, setIsArrow] = useState<boolean>(false);

    const toggleModal = () => {
        setIsModal((prev) => !prev);
    };

    useEffect(() => {
        const handleResize = () => {
            const windowWidthSize = window.innerWidth;
            if (windowWidthSize > 768) {
                setIsArrow(false);
                setIsModal(false);
            } else {
                setIsArrow(true);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isArrow]);
    
    return (
        <>
            <aside className={`absolute inset-0 z-50 md:relative md:px-[16px] md:py-[20px] mb-5 lg:max-w-[300px] md:max-w-[180px] w-full min-h-full rounded-xl bg-dim-white transition-width duration-500 ${isModal ? 'max-w-[320px]' : 'max-w-[0px]'} ${isModal ? 'md:max-w-[320px]' : 'md:max-w-[180px]'}`}>
                {isArrow &&
                    <button className={`flex justify-center items-center absolute top-64 ${isModal ? 'right-[2px]' : 'left-[2px]'} z-0 bg-dim-textSmall/60 rounded-md w-4 h-16`} onClick={toggleModal}>
                        <img className={`transition ease-in duration-200 ${isModal ? 'rotate-[-90deg]' : 'rotate-[90deg]'}`} src="/img/svg/arrow-up.svg" alt="arrow-up" />
                    </button>
                }
                <div className={`md:flex ${!isModal ? 'hidden' : 'flex'} flex-col gap-[20px] md:px-0 md:py-0 px-[16px] py-[20px]`}>
                    <section className="flex justify-between">
                        <h1>Filters</h1>
                        <button className="text-sm cursor-pointer text-dim-bluePrimary">Clear all</button>
                    </section>
                    <RangeSalary />
                    <CompanySize />
                    <CompanyRating />
                    <Industry />
                </div>
            
            </aside>
            {isModal && (
                <div className="fixed inset-0 z-40 bg-transparent h-screen bg-dim-textSmall/40" onClick={toggleModal} />
            )}
        </>
    )
}

export default Aside;