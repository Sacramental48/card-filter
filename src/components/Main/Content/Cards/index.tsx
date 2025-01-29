import { useEffect, useState } from "react";
import axios, {AxiosResponse} from "axios";
import { Vacancy } from '@/types/models';
import { JobItems } from '@/types/models';
import ContentCards from "./ContentCards";
import Pagination from "./Pagination";

const Cards = () => {
    const [data, setData] = useState<{ vacancies: Vacancy[] } | null>(null);
    const [totalPages, setTotalPages] = useState(20);


    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('refresh_token')}`
        },
        params: {
            per_page: 16,
            count: 16,
        }
    }
    const openCurrentJobPage = async () => {
        try {
            const response: AxiosResponse<{ vacancies: Vacancy[] }> = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/vacancies/`, config);
            setData(response.data);
        } catch(error) {
            console.error('Error when executing the request: ', error);
        }
    }

    useEffect(() => {
        openCurrentJobPage();
        console.log('useef1');
    }, []);

    const currentCountPage = data ? data.vacancies : [];

    return (
        <>
            {data && <ContentCards data={currentCountPage} />}
            <Pagination 
                totalPages={totalPages}
            />
        </>
        
    )
}

export default Cards;