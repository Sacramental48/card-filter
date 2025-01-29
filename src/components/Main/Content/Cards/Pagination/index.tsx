import { useMemo, useState } from "react";

type PaginationPropsType = {
    totalPages: number,
}

const Pagination: React.FC<PaginationPropsType> = ({ totalPages }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const pages = totalPages;
    const visiblePages = 5;

    const getVisiblePages = () => {

        let startPage  = Math.max(1, currentPage - 2);
        let endPage = startPage + visiblePages - 1;

        if(endPage > pages) {
            endPage = pages;
            startPage = Math.max(1, endPage - visiblePages + 1);
        }

        return Array.from({ length: endPage - startPage + 1}, (_, i) => startPage + i);
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };
    
    const visiblePageNumbers = useMemo(() => getVisiblePages(), [currentPage, totalPages]);

    return (
        <nav className="flex justify-center items-center mt-9 mb-[21px]">
            <ul className="flex items-end gap-4">
            {visiblePageNumbers.map((number) => (
                    <li
                        key={number}
                        onClick={() => handlePageClick(number)}
                        className="cursor-pointer rounded-lg px-[17px] py-[12px]"
                        style={{
                            backgroundColor: number === currentPage ? "white" : "#F5F7FB",
                            outline: number === currentPage ? "1px solid #eaeaea" : 'none',
                        }}
                    >
                        {number}
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination;