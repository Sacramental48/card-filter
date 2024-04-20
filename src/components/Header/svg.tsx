export const Search = ({color}: {color: string}) => {
    return (
        <svg className="xs:w-[21px] xs:h-[21px] w-[40px] h-[40px]" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.6686 17.5031H6.33179C4.49008 17.5031 2.99707 16.0101 2.99707 14.1683V7.4989C2.99707 6.57805 3.74357 5.83154 4.66443 5.83154H16.336C17.2568 5.83154 18.0033 6.57805 18.0033 7.4989V14.1683C18.0033 16.0101 16.5103 17.5031 14.6686 17.5031Z" stroke={color ? color : '#636B74'} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.16553 5.83155V4.16419C7.16553 3.24333 7.91203 2.49683 8.83289 2.49683H12.1676C13.0885 2.49683 13.835 3.24333 13.835 4.16419V5.83155" stroke={color ? color : '#636B74'} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="8.83276" y="9.16626" width="3.33472" height="2.50104" rx="0.416667" stroke={color ? color : '#636B74'} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12.1675 10.4169H15.0854C16.6969 10.4169 18.0032 9.11053 18.0032 7.49902V7.49902" stroke={color ? color : '#636B74'} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8.83283 10.4169H5.91495C4.30345 10.4169 2.99707 9.11053 2.99707 7.49902V7.49902" stroke={color ? color : '#636B74'} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
};

export const Analytics = ({color}: {color: string} ) => {
    return (
        <svg className="xs:w-[21px] xs:h-[21px] w-[40px] h-[40px]" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="2.5" width="15" height="15" rx="4.16667" stroke={color ? color : '#636B74'} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.16667 7.5V13.3333" stroke={color ? color : '#636B74'} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M10.4999 10.8333V13.3333" stroke={color ? color : '#636B74'} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.8334 7.5V13.3333" stroke={color ? color : '#636B74'} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
};



