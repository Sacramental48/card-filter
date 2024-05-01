import Aside from './Aside';
import Content from './Content';


const Main = () => {
    return (
        <main className='flex px-[40px] gap-[20px] h-screen'>
            <Aside />
            <Content />
        </main>
    )
}

export default Main;