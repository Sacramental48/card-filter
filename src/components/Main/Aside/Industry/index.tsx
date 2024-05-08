import Accordion from "@/components/Ui/Accordion";
import { useState } from 'react';

type IndustryType = {
    name: string,
    checked: boolean,
}

const Industry = () => {
    const industryData: IndustryType[] = [
        {name: 'All industries', checked: false},
        {name: 'Agriculture', checked: false},
        {name: 'Arts, Entertainment', checked: false},
        {name: 'Biotech & Pharmaceuticals', checked: false},
        {name: 'Construction', checked: false},
        {name: 'Cyber Security', checked: false},
        {name: 'E-Commerce', checked: false},
        {name: 'EdTech', checked: false},
        {name: 'Fintech', checked: false},
        {name: 'Healthcare', checked: false},
        {name: 'Human Resources & Staffing', checked: false},
        {name: 'Information Technology', checked: false},
        {name: 'Insurance', checked: false},
        {name: 'Marketing & PR', checked: false},
        {name: 'Media & Communication', checked: false},
        {name: 'Real Estate', checked: false},
        {name: 'Retail & Wholesale', checked: false},
        {name: 'Telecommunications', checked: false},
        {name: 'Transportation &Logistics', checked: false},
    ];

    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

    const handleCheckboxChange = (name: string) => {
        if (name === 'All industries') {
            const allChecked = !checkedItems['All industries'];
            const newCheckedItems: Record<string, boolean> = {};
            industryData.forEach((field) => {
                newCheckedItems[field.name] = allChecked;
            });
            setCheckedItems(newCheckedItems);
        } else {
            setCheckedItems(prevState => ({
                ...prevState,
                [name]: !prevState[name]
            }));
        }
    }

    return (
        <Accordion
            title={'Industry'}
        >
            <div className="flex flex-col gap-3">
                {industryData.map((field, index) => (
                    <div className="checkbox-block" key={index}>
                        <input
                            type="checkbox"
                            id={field.name}
                            checked={checkedItems[field.name] || false}
                            onChange={() => handleCheckboxChange(field.name)}
                        />
                        <label htmlFor={field.name}>{field.name}</label>
                    </div>
                ))}
            </div>
        </Accordion>
    );
}

export default Industry;