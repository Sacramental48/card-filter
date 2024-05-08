import { useEffect, useState } from "react";
import axios, {AxiosResponse} from "axios";
import { Vacancy } from '@/types/models';
import ContentCards from "./ContentCards";
import Pagination from "./Pagination";

const Cards = () => {
    const [data, setData] = useState<Vacancy[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    const config = {
        headers: {
            'Accept': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('refresh_token')}`
        },
        params: {
            per_page: 16 
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response: AxiosResponse<{ vacancies: Vacancy[] }> = await axios.get(`${import.meta.env.VITE_API_ENDPOINT}/vacancies/`, config);
                setData(response.data.vacancies)
            } catch(error) {
                console.error('Error when executing the request: ', error);
            }
        };

        fetchData();

    }, []);

    const indexOfLastPage = currentPage * itemsPerPage;
    const indexOfFirstPage = indexOfLastPage - itemsPerPage;
    const currentItem = data.slice(indexOfFirstPage, indexOfLastPage);

    return (
        <div>
            <ContentCards data={currentItem} />
            <Pagination 
                itemsPerPage={itemsPerPage}
                totalItems={data.length}
                paginate={paginate}
                currentPage={currentPage}
            />
        </div>
        
    )
}

export default Cards;