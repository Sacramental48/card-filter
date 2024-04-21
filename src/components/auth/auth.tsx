import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
    const navigate = useNavigate();
    const isActive = localStorage.getItem('access_token');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const getAccess = async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault();

        if(email !== '' && password !== '') {
            try {
                const response = await axios.post(`${import.meta.env.VITE_API_ENDPOINT}/token/`, {
                    email,
                    password
                });
                localStorage.setItem('access_token', response.data.access_token);
                localStorage.setItem('refresh_token', response.data.refresh_token);

                if(response.data.access_token){
                    return navigate('/');
                }
            } catch(error) {
                console.log(error);
            }
        }
    };

    useEffect(() => {
        if(isActive) {
            return navigate('/');
        }
    }, [isActive]);

    return (
        <section className="flex justify-center items-center h-screen">
            <div className="flex flex-col items-center rounded-xl bg-dim-white px-[20px] py-[20px]">
                <h2 className="font-semibold text-4xl shadow-xl mb-6">LOGIN</h2>
                <form className="flex items-center flex-col gap-4 h-auto w-[300px]" onSubmit={getAccess}>
                    <input type="text" className="h-12 outline-none border-none shadow-inner drop-shadow-lg rounded-lg pl-4" onChange={e => setEmail(e.target.value)} />
                    <input type="password" className="h-12 outline-none border-none shadow-inner drop-shadow-lg rounded-lg pl-4 mb-6" onChange={e => setPassword(e.target.value)} />
                    <button type="submit" className="bg-dim-secondBluePrimary border-2 text-dim-textPrimary h-10 drop-shadow-xl rounded-lg w-full max-w-32">SIGN IN</button>
                </form>
            </div>
        </section>
    )
}

export default Auth;