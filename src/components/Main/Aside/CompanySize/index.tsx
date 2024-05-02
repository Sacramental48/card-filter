// import { useState } from "react";
import Accordion from "@/components/Ui/Accordion";

const CompanySize = () => {
    return (
        <Accordion title={'Company size'}>
            <div className="flex flex-col gap-3">
                <div className="checkbox-block">
                    <input type="checkbox" id="field1" />
                    <label htmlFor="field1">1 - 50 employees</label>
                </div>
                <div className="checkbox-block">
                    <input type="checkbox" id="field2" />
                    <label htmlFor="field2" className="text-dim-textSecondary">51 - 200 employees</label>
                </div>
                <div className="checkbox-block">
                    <input type="checkbox" id="field3" />
                    <label htmlFor="field3">201 - 500 employees</label>
                </div>
                <div className="checkbox-block">
                    <input type="checkbox" id="field4" />
                    <label htmlFor="field4">501 - 1000 employees</label>
                </div>
                <div className="checkbox-block">
                    <input type="checkbox" id="field5" />
                    <label htmlFor="field5">1000+ employees</label>
                </div>
            </div>
        </Accordion>
    )
}

export default CompanySize;