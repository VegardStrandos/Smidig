import React from 'react'
import { Button } from '../../components'
import { Constants } from '../../data'
import './StreamScriptPage.scss'

export function StreamScriptPage() {
    const classPrefix = 'stream-script-page'

    return (
        <div className={`${classPrefix}`}>
            <h1 className={`${classPrefix}__title`}>Manus gjennomgang</h1>
            <div className={`${classPrefix}__editor-content`}>
                <section className={`${classPrefix}__editor-content__left`}>
                    <div
                        className={`${classPrefix}__editor-content__left__text-field`}
                        id="ScrollableTextBox"
                    >
                        <h3>Hei! Velkommen tilbake til min stream!</h3>
                        <p>
                            Tusen takk for alle donasjoner. Det hjelper meg til
                            å kjøpe flere overlays!
                        </p>
                        <p>
                            Nå skal vi fyre opp noe Warzone i noen timer, så
                            håper at så mange som mulig vil se på. Del gjerne
                            streamen med alle dere kjenner da jeg blir live
                            langt ute på natten!
                        </p>
                        <textarea
                            style={{
                                width: '100%',
                                height: '100%',
                                resize: 'none',
                                fontSize: '20px',
                                fontFamily: 'sans-serif',
                                borderBlockColor: 'white',
                            }}
                        />
                    </div>
                </section>
                <div className={`${classPrefix}__editor-content__right`}>
                    <nav
                        className={`${classPrefix}__editor-content__right__top`}
                    >
                        <Button
                            className={`button__whiteotangu`}
                            link={Constants.paths.planner}
                        >
                            Søk etter manus
                        </Button>
                        <Button
                            className={`button__whiteotangu`}
                            link={Constants.paths.planner}
                        >
                            Skriv manus
                        </Button>
                    </nav>
                    <nav
                        className={`${classPrefix}__editor-content__right__bottom`}
                    >
                        <Button className={`button__karl-gustav`} link={'/'}>
                            Sponsor Manus
                        </Button>
                        <Button className={`button__karl-gustav`} link={'/'}>
                            Sponsor Manus
                        </Button>
                        <Button className={`button__karl-gustav`} link={'/'}>
                            Fotball Manus
                        </Button>
                        <Button className={`button__karl-gustav`} link={'/'}>
                            Review Manus
                        </Button>
                        <Button className={`button__karl-gustav`} link={'/'}>
                            Start Stream Manus
                        </Button>
                        <Button className={`button__karl-gustav`} link={'/'}>
                            Start Stream Manus
                        </Button>
                    </nav>
                </div>
            </div>
            <div className={`${classPrefix}__content`}>
                <nav className={`${classPrefix}__content__nav`}>
                    <Button
                        className={`button__whiteotangu`}
                        link={Constants.paths.planner}
                    >
                        ← Til planlegger
                    </Button>
                    <Button className={`button__orangotangu`}>Large</Button>
                </nav>
            </div>
        </div>
    )
}

export default StreamScriptPage
