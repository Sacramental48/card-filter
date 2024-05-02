import Accordion from "@/components/Ui/Accordion";
import { useState } from 'react'
type IndustryType  = {
    name: string,
    checked?: boolean,
}

const Industry = () => {
    const industryData: IndustryType[] = [
        {name: 'All industries'},
        {name: 'Agriculture'},
        {name: 'Arts, Entertainment'},
        {name: 'Biotech & Pharmaceuticals'},
        {name: 'Construction'},
        {name: 'Cyber Security'},
        {name: 'E-Commerce'},
        {name: 'EdTech'},
        {name: 'Fintech'},
        {name: 'Healthcare'},
        {name: 'Human Resources & Staffing'},
        {name: 'Information Technology'},
        {name: 'Insurance'},
        {name: 'Marketing & PR'},
        {name: 'Media & Communication'},
        {name: 'Real Estate'},
        {name: 'Retail & Wholesale'},
        {name: 'Telecommunications'},
        {name: 'Transportation &Logistics'},
    ];

    const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
    
    const handleCheckboxChange = (name: string) => {
        setCheckedItems(prevState => ({
            ...prevState,
            [name]: !prevState[name]
        }));
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