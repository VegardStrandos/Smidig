import React from "react";
import classnames from "classnames";
import "./button.scss";

// Button Component
// id - funksjon
// className - funksjon
// onClick - funksjon
// link - tekst
// children - node / elementer
export const Button = (props) => {
    const { id, className, onClick, link, text, children } = props;
    const classPrefix = "button";

    const smartProps = () => {
        return {
            id,
            className: classnames(classPrefix, {
                [`${className}`]: className
            }),
            onClick,
            href: link
        }
    }

    return(
        <a {...smartProps()}>
            {children}
        </a>
    );
}