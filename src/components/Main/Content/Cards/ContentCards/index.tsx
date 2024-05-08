import { Vacancy } from '@/types/models';

const ContentCards = ({ data }: {data: Vacancy[]}) => {

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    };

    return (
        <div className="flex justify-start flex-wrap gap-[10px]">
            {data.map((item, index) => (
                <article className="flex flex-col justify-between bg-dim-white cursor-pointer rounded-xl max-w-[340px] w-full p-4" key={index}>
                    <div className="mb-3">
                            <h2 className="text-dim-textPrimary font-semibold max-w-full overflow-hidden whitespace-nowrap text-ellipsis">{item.job_title}</h2>
                            <h4 className="text-sm max-w-full overflow-hidden whitespace-nowrap text-ellipsis">{item.company_name}</h4>
                        <p className="text-sm text-dim-textSecondary mb-3">{item.company_location}</p>
                        <div className="flex flex-wrap gap-2 mb-3">
                            <span className="card-label">{item.site_parsed}</span>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-1">
                            {item.job_salary_per_hour ? 
                            <span className="text-dim-bluePrimary font-semibold">${item.job_salary_per_hour}</span>
                            : <span className="text-dim-bluePrimary font-semibold">$...</span>
                            }
                            <span className="text-dim-textSecondary">/hour</span>
                        </div>
                        <span className='text-dim-textSecondary'>{formatDate(item.job_date_posted)}</span>
                    </div>
                </article>
            ))}
        </div>
        
    )
}

export default ContentCards;