import { Vacancy } from '@/types/models';

const ContentCards = ({ data }: {data: Vacancy[]}) => {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className="grid grid-cols-6 gap-[10px]">
            {data.map((item, index) => (
                <article className="sm:col-span-2 xs:col-span-3 col-span-6 bg-dim-white cursor-pointer rounded-xl w-full p-4" key={index}>
                    <div className="mb-3">
                        <h2 className="text-dim-textPrimary font-semibold leading-5 mb-2 max-w-full overflow-hidden whitespace-nowrap text-ellipsis">{item.job_title}</h2>
                        <h4 className="text-sm max-w-full overflow-hidden leading-[18px] mb-[4px] whitespace-nowrap text-ellipsis">{item.company_name}</h4>
                        {item.company_location 
                        ? 
                            <p className="text-sm text-dim-textSecondary leading-[18px] mb-3">{item.company_location}</p> 
                        :
                            <p className='text-sm text-dim-textSecondary leading-[18px] mb-3'>...</p>
                        }
                        <div className="flex flex-wrap gap-2">
                            <span className="card-label">{item.site_parsed}</span>
                        </div>
                    </div>
                    <div className="flex justify-between flex-col lg:flex-row">
                        <div className="flex items-center gap-1">
                            {item.job_salary_per_hour 
                            ? 
                                <span className="text-dim-bluePrimary leading-5 font-semibold">${item.job_salary_per_hour}</span>
                            : 
                                <span className="text-dim-bluePrimary leading-5 font-semibold">$...</span>
                            }
                            <span className="text-dim-textSecondary leading-5">/hour</span>
                        </div>
                        <span className='text-dim-textSecondary leading-5'>{formatDate(item.job_date_posted)}</span>
                    </div>
                </article>
            ))}
        </div>
        
    )
}

export default ContentCards;