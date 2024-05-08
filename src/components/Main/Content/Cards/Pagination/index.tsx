type PaginationPropsType = {
    currentPage: number,
    itemsPerPage: number,
    totalItems: number,
    paginate: (pageNumber: number) => void
}

const Pagination = ({currentPage, itemsPerPage, totalItems, paginate}: PaginationPropsType) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    let startPage, endPage;
    if (totalPages <= 5) {
        startPage = 1;
        endPage = totalPages;
    } else {
        if (currentPage < 4) {
            startPage = 1;
            endPage = 4;
        } else if (currentPage + 2 > totalPages) {
            startPage = totalPages - 3;
            endPage = totalPages;
        } else {
            startPage = currentPage - 1;
            endPage = currentPage + 1;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="flex justify-center items-center mt-9 mb-[21px]">
            <ul className="flex items-end gap-4">
                {startPage !== 1 && (
                    <li className="cursor-pointer rounded-lg px-[17px] py-[12px]" onClick={() => paginate(1)}>
                        1
                    </li>
                )}
                {startPage > 2 && <li>...</li>}
                {pageNumbers.map((number) => (
                    <li key={number} onClick={() => paginate(number)} className="cursor-pointer rounded-lg px-[17px] py-[12px]" style={{backgroundColor: number === currentPage ? 'white' : '#F5F7FB'}}>
                        {number}
                    </li>
                ))}
                {endPage < totalPages - 1 && <li className="text-end">...</li>}
                {endPage !== totalPages && (
                    <li className="cursor-pointer rounded-lg px-[17px] py-[12px]" onClick={() => paginate(totalPages)}>
                        {totalPages}
                    </li>
                )}
            </ul>
        </nav>
    )
}

export default Pagination;