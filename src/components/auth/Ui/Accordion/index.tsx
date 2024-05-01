import { ReactNode } from "react";

interface Props {
    visiblePart: ReactNode,
    hiddenPart: ReactNode,
    toggleValue: boolean
}

const Accordion = ({visiblePart, hiddenPart, toggleValue }: Props) => {

    return (
        <section>
            {visiblePart}
            <div className={`transition-slide ${toggleValue ? 'visible' : ''}`}>
                {hiddenPart}
            </div>
        </section>
    )
}

export default Accordion;