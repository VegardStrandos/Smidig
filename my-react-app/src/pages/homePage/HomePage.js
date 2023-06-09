import React from 'react'
import { Constants } from '../../data'
import { Button } from '../../components'
import Image from '../../assets/homePageImage.png'
import './HomePage.scss'

export const HomePage = () => {
    const classPrefix = 'home-page'

    return (
        <div className={classPrefix}>
            <section className={`${classPrefix}__content`}>
                <h2 className={`${classPrefix}__content__title`}>EasyStream</h2>

                <img
                    className={`${classPrefix}__content__big-image`}
                    src={Image}
                    alt={'Samling av streamer'}
                />

                <Button
                    link={Constants.paths.planner}
                    className={'button__orangotangu'}
                >
                    Kom i gang
                </Button>
            </section>
        </div>
    )
}
