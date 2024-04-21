import { useEffect } from 'react';
import Header from '../components/Header/Header';
import { useNavigate } from 'react-router-dom';

const Layout = () => {
    const navigate = useNavigate();
    const isActive = localStorage.getItem('access_token');

    useEffect(() => {
        if(!isActive) {
            navigate('/auth');
        }
    }, []);

    return (
        <div className="flex flex-col h-screen">
            <Header />
        </div>
    );
};
export default Layout;
