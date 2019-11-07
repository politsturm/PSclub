import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import classNames from "classnames"
import css from "./styles.module.css"
import logoImage from "../../images/logo2.png"

const {
  wrapper,
  logo,
  menu,
  headerImage,
  headerWrapper,
  headerImageWrapper
} = css;

const headerClasses = classNames({
  [wrapper]: true
})

const Header = ({ siteTitle }) => (
  <div className={headerWrapper}>
    <div className={headerImageWrapper}>
      <div className={headerImage} />
    </div>
    <header className={headerClasses}>
      <div className={logo}>
        <Link to="/">
          <img src={logoImage} />
        </Link>
      </div>
      <div className={menu}>
        <ul>
          {/*<li>
            <Link to="/faq/">FAQ</Link>
          </li>*/}
          <li>
            <a href="https://politsturm.com/programma-raboty/">Программа</a>
          </li>
          {/*<li>
            <Link to="/course/">Курс обучения</Link>
          </li>*/}
          <li>
            <a href="https://politsturm.com/">Politsturm</a>
          </li>
          <li>
            <Link to="/#join">Вступить</Link>
          </li>
        </ul>
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
