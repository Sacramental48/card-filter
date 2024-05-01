import RangeSalary from "./RangeSalary";

const Aside = () => {
    return (
        <aside className="px-[16px] py-[20px] max-w-[300px] w-full rounded-xl bg-dim-white">
            <div className="flex flex-col gap-[20px]">
                <section className="flex justify-between">
                    <h1>Filters</h1>
                    <button className="text-sm cursor-pointer text-dim-bluePrimary">Clear all</button>
                </section>
                <RangeSalary />
            </div>
        </aside>
    )
}

export default Aside;