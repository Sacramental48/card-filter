import { useState } from "react";
import Accordion from "@/components/auth/Ui/Accordion";

type Salary = {
    firstCount: number | null,
    secondCount: number | null
}

const RangeSalary = () => {
    const [toggleArrow, setToggleArrow] = useState<boolean>(false);
    const [salary, setSalary] = useState<Salary>({
        firstCount: null,
        secondCount: null
    });

    const handleCountChange = (key: keyof Salary) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setSalary({ ...salary, [key]: parseInt(e.target.value) || null });
    };

    return (
        <Accordion toggleValue={toggleArrow}
            visiblePart={
                <div className="flex justify-between cursor-pointer mb-3" onClick={() => setToggleArrow(!toggleArrow)}>
                    <h2>Range salary</h2>
                    {toggleArrow 
                        ? 
                        <img src="/img/svg/arrow-up.svg" alt="arrow-up" /> 
                        :
                        <img src="/img/svg/arrow-down.svg" alt="arrow-down" />
                    }
                </div>
            }
            hiddenPart={
                <div className="flex gap-2 items-center">
                    <div className="flex relative">
                        <input type="number" value={salary.firstCount || ''} onChange={handleCountChange('firstCount')} className="range-input" />
                        <img className="absolute top-[13px] left-3" src="/img/svg/dollar.svg" alt="dollar" />
                    </div>
                    <span>-</span>
                    <div className="flex relative">
                        <input type="number" value={salary.secondCount || ''} onChange={handleCountChange('secondCount')} className="range-input" />
                        <img className="absolute top-[13px] left-3" src="/img/svg/dollar.svg" alt="dollar" />
                    </div>
                </div>
            }
        />
    );
};

export default RangeSalary;