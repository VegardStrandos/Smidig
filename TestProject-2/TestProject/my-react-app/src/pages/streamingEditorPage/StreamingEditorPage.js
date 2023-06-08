import React, { useState, useMemo } from 'react'
import { AddButton, Button, Input, LogCard } from '../../components'
import { Constants } from '../../data'
import classNames from 'classnames'
import './StreamingEditorPage.scss'

export const StreamingEditorPage = () => {
    const classPrefix = 'streaming-editor'

    // array of logMessageObject
    const [log, setLog] = useState([])

    let msgName = undefined
    let msgStartTime = undefined
    let msgEndTime = undefined

    const _updateLog = (name, startTime, endTime) => {
        let localLog = log.slice()

        if (name && startTime && endTime) {
            let nameInput = document.getElementById('nameField')
            let startTimeInput = document.getElementById('startTimeField')
            let endTimeInput = document.getElementById('endTimeField')

            nameInput.value = ''
            startTimeInput.value = undefined
            endTimeInput.value = undefined

            localLog.push({
                name,
                startTime,
                endTime,
            })

            msgName = undefined
            msgStartTime = undefined
            msgEndTime = undefined

            console.log(localLog)

            setLog(localLog)
        }
    }

    const _renderForm = () => {
        return (
            <form className={`${classPrefix}__container__form`}>
                <Input
                    id={'nameField'}
                    title={'Navn'}
                    placeholder={'Skriv her'}
                    onChange={(event) => {
                        msgName = event.target.value
                    }}
                />
                <Input
                    id={'startTimeField'}
                    title={'Starttid'}
                    placeholder={'Skriv her'}
                    type={'time'}
                    onChange={(event) => {
                        msgStartTime = event.target.value
                    }}
                />
                <Input
                    id={'endTimeField'}
                    title={'Sluttid'}
                    placeholder={'Skriv her'}
                    type={'time'}
                    onChange={(event) => {
                        msgEndTime = event.target.value
                    }}
                />
                <AddButton
                    text={'Legg til'}
                    onClick={() => {
                        _updateLog(msgName, msgStartTime, msgEndTime)
                    }}
                />
            </form>
        )
    }

    const _renderLog = useMemo(() => {
        if (log && log.length > 0) {
            return log.map((newLog, index) => {
                return (
                    <LogCard
                        key={`log-card-${index}`}
                        title={newLog.name}
                        startTime={newLog.startTime}
                        endTime={newLog.endTime}
                    />
                )
            })
        }
    }, [log])

    return (
        <div className={`${classPrefix}`}>
            <section className={`${classPrefix}__container`}>
                <section className={`${classPrefix}__container__description`}>
                    <h1
                        className={`${classPrefix}__container__description__title`}
                    >
                        Lag sendingsplan
                    </h1>
                    <p
                        className={`${classPrefix}__container__description__text`}
                    >
                        Legg til ulike sendingssegementer du ønsker i sending
                        din
                    </p>
                </section>
                <div className={`${classPrefix}__container__logger`}>
                    <div className={`${classPrefix}__container__logger__left`}>
                        {_renderForm()}
                    </div>
                    <div className={`${classPrefix}__container__logger__right`}>
                        {log && _renderLog}
                    </div>
                </div>
                <nav className={`${classPrefix}__container__nav`}>
                    <Button
                        className={classNames(`button__whiteotangu`, {
                            [`${classPrefix}__container__nav__action-button`]: true,
                        })}
                        link={Constants.paths.planner}
                    >
                        ← Til planlegger
                    </Button>
                    <Button
                        className={classNames(`button__orangotangu`, {
                            [`${classPrefix}__container__nav__action-button`]: true,
                        })}
                    >
                        Til sendingsoversikt
                    </Button>
                </nav>
            </section>
        </div>
    )
}
