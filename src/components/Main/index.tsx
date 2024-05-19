import Aside from './Aside';
import Content from './Content';


const Main = () => {
    return (
        <main className='flex lg:gap-5 gap-[10px] md:px-[40px] px-[20px] h-full mb-6'>
            <Aside />
            <Content />
        </main>
    )
}

export default Main;