import "./Input.scss";

export const Input = (props) => {
    const { id, title, placeholder, onChange, type = "text" } = props;
    const classPrefix = "input";

    return(
        <div className={classPrefix}>
            <label className={`${classPrefix}__title`}>
                {title}
            </label>
            <input
                id={id}
                className={`${classPrefix}__field`}
                placeholder={placeholder}
                type={type}
                onChange={(value) => {
                    onChange(value);
                }}
            />
        </div>
    );
}