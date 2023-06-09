import classNames from 'classnames'
import { Button } from '../button'
import { Constants } from '../../data/Constants'
import Logo from '../../assets/wizrt.svg'
import UserIcon from '../../assets/user-icon.svg'
import './header.scss'

export const Header = () => {
    const classPrefix = 'header'

    return (
        <header className={`${classPrefix}`}>
            <nav className={`${classPrefix}__left-nav`}>
                <Button
                    className={`${classPrefix}__logo`}
                    link={Constants.paths.homePage}
                >
                    <img
                        className={`${classPrefix}__logo`}
                        src={Logo}
                        alt={'Vizrt sin logo'}
                    />
                </Button>
            </nav>
            <nav className={`${classPrefix}__nav-middle`}>
                <Button className={`button__white-trash`} link={'/'}>
                    Produkter
                </Button>
                <Button className={`button__white-trash`} link={'/'}>
                    Nyheter
                </Button>
                <Button className={`button__white-trash`} link={'/'}>
                    Kontakt oss
                </Button>
                <Button className={`button__white-trash`} link={'/'}>
                    Hjelp
                </Button>
            </nav>
            <nav className={`${classPrefix}__right-nav`}>
                <Button
                    className={`${classPrefix}__account`}
                    link={Constants.paths.profilePage}
                >
                    <img
                        className={`${classPrefix}__account`}
                        src={UserIcon}
                        alt={'Bruker ikon'}
                    />
                </Button>
            </nav>
        </header>
    )
}
