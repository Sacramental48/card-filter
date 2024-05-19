import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Main from '../components/Main';

const Layout = () => {
    const navigate = useNavigate();
    const isActive = localStorage.getItem('access_token');

    useEffect(() => {
        if(!isActive) {
            navigate('/auth');
        }
    }, []);

    return (
        <div className="flex flex-col gap-4 h-fit">
            <Header />
            <Main />
        </div>
    );
};
export default Layout;
