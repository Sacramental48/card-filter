import Accordion from "@/components/Ui/Accordion";
import { useState } from "react";

type CheckboxProps = {
    id: number;
    checked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const CheckboxStar = ({id, checked, onChange}: CheckboxProps): JSX.Element => {
    return (
        <div className="checkbox-block">
            <input type="checkbox" id={`star-${id}`} checked={checked} onChange={onChange} />
            <label htmlFor={`star-${id}`} className="flex">
                {[...Array(5)].map((_, index) => (
                    <span key={index}>
                        <img src={`/img/svg/${id < 6 - index ? 'fill-star' : 'star'}.svg`} alt="" />
                    </span>
                ))}
            </label>
        </div>
    )
}

const CompanyRating = () => {
    const [starData, setStarData] = useState<Record<string, boolean>>({});

    const handleCheckboxChange = (name: string) => {
        setStarData(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
    }

    return (
        <Accordion
        title={'Company rating'}
        >
            <div className="flex flex-col gap-3">
                {[1, 2, 3, 4, 5].map(num => (
                    <CheckboxStar
                    key={num} 
                    id={num}
                    checked={starData[`star${num}`] || false}
                    onChange={() => handleCheckboxChange(`star${num}`)}
                    />
                ))}
            </div>
        </Accordion>
    )
}

export default CompanyRating;