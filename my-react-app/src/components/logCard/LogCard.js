import "./LogCard.scss";

export const LogCard = (props) => {
    const { title, startTime, endTime } = props;
    const classPrefix = "log-card";

    return(
        <article className={classPrefix}>
            <h3 className={`${classPrefix}__title`}>{title}</h3>
            <p className={`${classPrefix}__time`}>Periode</p>
            <p className={`${classPrefix}__time`}>{startTime} → {endTime}</p>
        </article>
    );
}