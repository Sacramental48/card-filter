import { ReactNode, useState, useEffect, useRef } from "react";

interface Props {
    title: string,
    children: ReactNode
}

const Accordion = ({ title, children }: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentRef.current) {
            contentRef.current.style.maxHeight = isOpen ? `${contentRef.current.scrollHeight}px` : '0';
        }
    }, [isOpen]);

    return (
        <>
            <div className="flex justify-between cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <h2>{title}</h2>
                    <img src={`/img/svg/arrow-${isOpen ? 'up' : 'down'}.svg`} alt="arrow-up" /> 
            </div>
            {
                isOpen &&
                <div className="accordion-section mt-3" ref={contentRef}>
                    {children}
                </div>

            }
        </>
    )
}

export default Accordion;