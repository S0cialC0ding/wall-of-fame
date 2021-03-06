import React, { Component } from "react";
import styled from 'styled-components';
import { translate } from 'react-i18next'

import { BurgerIcon, CrossIcon } from './Icons';
import { ButtonLink } from './Button';

const MenuContainer = styled.div`
  display: flex;
  background-color: #2c0d54;
  justify-content: space-between;
  @media (min-width: 56em) {
    display: none;
  }
`

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1rem;
`

const BurgerContainer = styled.div`
  height: 3rem;
  width: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const Nav = styled.nav`
  position: absolute;
  z-index: 500;
  width: 100%;
`

const NavItem = styled.a`
  padding: 1rem;
  display: block;
  color: white;
  background-color: #2c0d54;
  border-top: 1px solid white;
  font-family: Quicksand;
  text-decoration: none;
  display: flex;
`

const ButtonsContainer = styled.div`
  padding: 1rem;
  display: block;
  color: white;
  background-color: #2c0d54;
  border-top: 1px solid white;
  font-family: Quicksand;
  text-decoration: none;
  display: flex;
`

const Overlay = styled.div`
  position: absolute;
  height: 90%;
  width: 100%;
`

class MainMenu extends Component {
  state = {
    showMenu: false
  }

  // componentWillMount() {
  //   const { i18n } = this.props
  //   i18n.changeLanguage('de')
  // }

  render() {
    const { t } = this.props
    const { showMenu } = this.state

    return (
      <div>
        <MenuContainer>
          <BrandContainer>
            <a href="https://giveth.io/">
              <svg xmlns="http://www.w3.org/2000/svg" fill="white" height="1rem" viewBox="0 0 1725 480"><path d="M247.85,0a26.8,26.8,0,0,0,2.82.44c60,3,111.74,25.51,155.45,66.64,1,1,2.08,2,2.89,2.75l-33.66,33.66c-1.39-1.29-3.14-2.88-4.87-4.5a192.59,192.59,0,0,0-70.85-41.73,197.2,197.2,0,0,0-35-7.93,201,201,0,0,0-37.55-1.15,179.13,179.13,0,0,0-40,6.92,190.72,190.72,0,0,0-32.34,12.46,181.22,181.22,0,0,0-39.48,26.05c-4.62,4.05-9.18,8.2-13.5,12.57a183.37,183.37,0,0,0-23,28.75A192.43,192.43,0,0,0,62.33,166a184.55,184.55,0,0,0-12.2,42.68,188.8,188.8,0,0,0-2.06,18.77,218.71,218.71,0,0,0-.3,22.52,185.67,185.67,0,0,0,5.95,38.45,195,195,0,0,0,13.06,35.42,192.54,192.54,0,0,0,27.9,42.25,191.71,191.71,0,0,0,129.86,65.52,214.11,214.11,0,0,0,27.79.2,184.19,184.19,0,0,0,44.16-8.08,187.23,187.23,0,0,0,28.65-11.43A193,193,0,0,0,400.23,346a189.7,189.7,0,0,0,24-51.46c.49-1.66,1-3.33,1.55-5.42-6.36-.07-12.32,0-18.28,0H191.67l48.91-48.91h239.1c0,1.19,0,2.28,0,3.37-1.32,58.45-20.85,110-59.18,154.17-34.21,39.38-77.18,64.58-128,76.36a243.84,243.84,0,0,1-40.56,5.56,215.84,215.84,0,0,1-34.27-.73c-52.4-5.19-98.54-25-137.81-60.16-38.18-34.15-62.73-76.5-74.18-126.41A221.25,221.25,0,0,1,.12,249.09C-1.71,185.5,18,129.42,59.83,81.53,93.61,42.83,136,18,186,6.21A243.52,243.52,0,0,1,223.21.63c1.83-.14,3.68-.08,5.52-.19A28.08,28.08,0,0,0,231.53,0Z"/><path d="M1724.81,480H1677V289.25H1532.88V479.56c-1.89.55-44.47.71-47.74.22V193.2h47.62v46.42c2,.54,139.55.74,144.2.23,0-15.76,0-31.56,0-47.36s0-31.52,0-47.28V97.6a16.72,16.72,0,0,1,2-.26q22.32,0,44.64,0c.4,0,.79.07,1.19.11Z"/><path d="M1244.58,289H1053.65l-48.82-48.84h184.65a142.39,142.39,0,0,0-31.06-50.88c-22.14-23.31-49.11-37.9-80.79-43.27A144.27,144.27,0,0,0,961.8,399.71c28.55,23.34,61.51,34.33,98.31,32.65s68.24-15.91,94.58-41.17l33.15,33.16c-47.31,49.73-137.16,76.87-220.3,35.18A191.38,191.38,0,0,1,1100.37,103C1197.36,127.74,1246.33,215.11,1244.58,289Z"/><path d="M672.31,383.1,837.22,97.47h54.64a1.53,1.53,0,0,1,.14.22c0,.07.07.17,0,.23a6.65,6.65,0,0,1-.39.87l-220,381.1H624v-382a1.65,1.65,0,0,1,.18-.24.46.46,0,0,1,.2-.11,5,5,0,0,1,.94-.16h45.12a9.34,9.34,0,0,1,1.2.19v285.4Z"/><path d="M1340.87,479.88H1293V144c-3.26-.18-6.35-.06-9.43-.08s-6.4,0-9.6,0H1236.3l-27.11-46.47h323.44v46.44H1340.87Z"/><path d="M575.56,479.88H528V193.17h47.33l.12.12c.05.06.14.12.14.18q.06,142.55.1,285.09C575.68,478.94,575.61,479.33,575.56,479.88Z"/><path d="M551.81,97.34a23.86,23.86,0,1,1-23.95,23.93A23.76,23.76,0,0,1,551.81,97.34Z"/></svg>
            </a>
          </BrandContainer>
          <BurgerContainer onClick={() => this.setState({ showMenu: !showMenu })}>
            {showMenu ? <CrossIcon /> : <BurgerIcon />}
          </BurgerContainer>
        </MenuContainer>
        {showMenu && <Overlay onClick={() => this.setState({ showMenu: false })} />}
        {showMenu && <Nav>
          <NavItem href="https://giveth.io/#communities">{t('link1')}</NavItem>
          <NavItem href="https://giveth.io/#dac">{t('link2')}</NavItem>
          <NavItem href="https://giveth.io/#developers-corner">{t('link3')}</NavItem>
          <NavItem href="https://giveth.io/#unicorn-dac">{t('link4')}</NavItem>
          <NavItem href="https://wiki.giveth.io">{t('link5')}</NavItem>
          <NavItem href="https://github.com/Giveth/wall-of-fame/issues/new?title=Replace%20this%20with%20what%20went%20wrong&body=Describe%20here%20what%20happened">Support</NavItem>
          <ButtonsContainer>
            <ButtonLink href="https://giveth.io/join/" width="100%" mr={1}>{t('link6')}</ButtonLink>
            <ButtonLink href="https://giveth.io/donate/" width="100%" ml={1}>{t('link7')}</ButtonLink>
          </ButtonsContainer>
        </Nav>}
      </div>
    );
  }
}

export default translate('navigation')(MainMenu)
