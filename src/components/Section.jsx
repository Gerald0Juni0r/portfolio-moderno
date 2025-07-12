// src/components/Section.jsx
import React, { useRef, useEffect, useState } from 'react';

const Section = ({ children, id, className = '' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <section
            id={id}
            ref={ref}
            className={`fade-in ${isVisible ? 'is-visible' : ''} ${className}`}
        >
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;