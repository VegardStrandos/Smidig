import React from 'react'
import { Button, Input } from '../../components'
import './ProfilePage.scss'
import { Constants } from '../../data'

export function ProfilePage() {
    const classPrefix = 'profile-page'

    return (
        <div className={classPrefix}>
            <section className={`${classPrefix}__content`}>
                <h1 className="Header">Easystream</h1>
                <h2 className="Header2">Lag en konto</h2>
                <Input
                    title={'Brukernavn'}
                    placeholder={'Skriv her'}
                    onChange={() => {}}
                />
                <Input
                    title={'Fult Navn'}
                    placeholder={'Skriv her'}
                    onChange={() => {}}
                />
                <Input
                    title={'Email'}
                    placeholder={'Skriv her'}
                    onChange={() => {}}
                />
                <Input
                    title={'Passord'}
                    placeholder={'Skriv her'}
                    onChange={() => {}}
                />
                <Input
                    title={'Gjenta passord'}
                    placeholder={'Skriv her'}
                    onChange={() => {}}
                />
                <nav className={`${classPrefix}__content__nav`}>
                    <Button
                        className={`button__whiteotangu`}
                        link={Constants.paths.planner}
                    >
                        ← Til planlegger
                    </Button>
                    <Button
                        className={`button__orangotangu`}
                    >
                        Large
                    </Button>
                </nav>
            </section>
        </div>
    )
}
