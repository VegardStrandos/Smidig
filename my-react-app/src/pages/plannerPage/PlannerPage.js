import React from "react";
import { Button } from "../../components";
import classNames from "classnames";
import "./PlannerPage.scss";
import { Constants } from "../../data";

export const PlannerPage = () => {

    const classPrefix = "planner";

    return(
        <div className={`${classPrefix}`}>
            <section className={`${classPrefix}__container`}>
                <h2 className={`${classPrefix}__container__title`}>Planlegger</h2>
                <nav className={`${classPrefix}__container__nav`}>
                    <Button 
                        className={`button__karl-gustav`}
                        link={Constants.paths.streamEditor}
                    >
                        Lag sendingsplan
                    </Button>
                    <Button 
                        className={`button__karl-gustav`}
                        link={Constants.paths.streamingScriptPage}
                    >
                        Manus gjennomgang
                    </Button>
                    <Button className={`button__karl-gustav`}>
                        Kamera instillinger
                    </Button>
                    <Button className={`button__karl-gustav`}>
                        Design valg
                    </Button>
                    <Button 
                        className={classNames(`button__orangotangu`, {
                            [`${classPrefix}__container__nav__action-button`]: true
                        })}
                        link={Constants.paths.goLivePage}
                    >
                        Til sendingsoversikt
                    </Button>
                </nav>
            </section>
        </div>
    );
}