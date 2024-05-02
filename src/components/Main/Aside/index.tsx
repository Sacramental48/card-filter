import RangeSalary from "./RangeSalary";
import CompanySize from "./CompanySize";
import CompanyRating from "./CompanyRating";
import Industry from "./Industry";

const Aside = () => {
    return (
        <aside className="px-[16px] py-[20px] mb-5 max-w-[300px] w-full rounded-xl bg-dim-white">
            <div className="flex flex-col gap-[20px]">
                <section className="flex justify-between">
                    <h1>Filters</h1>
                    <button className="text-sm cursor-pointer text-dim-bluePrimary">Clear all</button>
                </section>
                <RangeSalary />
                <CompanySize />
                <CompanyRating />
                <Industry />
            </div>
        </aside>
    )
}

export default Aside;