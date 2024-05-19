import { useState } from "react";
import Accordion from "@/components/Ui/Accordion";

type Salary = {
    firstCount: number | null,
    secondCount: number | null
}

const RangeSalary = () => {
    const [salary, setSalary] = useState<Salary>({
        firstCount: null,
        secondCount: null
    });

    const handleCountChange = (key: keyof Salary) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setSalary({ ...salary, [key]: parseInt(e.target.value) || null });
    };

    return (
        <Accordion 
        title={'Range salary'}
        >
            <div className="flex lg:items-center flex-wrap lg:flex-nowrap gap-2">
                <div className="flex relative">
                    <input type="number" value={salary.firstCount || ''} onChange={handleCountChange('firstCount')} className="range-input" />
                    <img className="absolute top-[13px] left-3" src="/img/svg/dollar.svg" alt="dollar" />
                </div>
                <span className="lg:inline hidden">-</span>
                <div className="flex relative">
                    <input type="number" value={salary.secondCount || ''} onChange={handleCountChange('secondCount')} className="range-input" />
                    <img className="absolute top-[13px] left-3" src="/img/svg/dollar.svg" alt="dollar" />
                </div>
            </div>
        </Accordion>
    );
};

export default RangeSalary;