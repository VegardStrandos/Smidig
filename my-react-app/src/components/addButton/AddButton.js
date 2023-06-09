import classnames from "classnames";
import "./AddButton.scss";

export const AddButton = (props) => {
    const { text, onClick } = props;
    const classPrefix = "add-button";

    return(
        <button 
            className={classPrefix}
            onClick={onClick}
            type="button"
        >
            <div className={`${classPrefix}__icon`}>
                <span 
                    className={classnames(`${classPrefix}__icon__line`, {
                        [`${classPrefix}__icon__line--1`]: true
                    })} 
                />
                <span 
                    className={classnames(`${classPrefix}__icon__line`, {
                        [`${classPrefix}__icon__line--2`]: true
                    })} 
                />
            </div>
            {text}
        </button>
    );
}