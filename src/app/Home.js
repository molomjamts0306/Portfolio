import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Home = ({ progress }) => {
  return (
    <HomeWrapper className={`${progress === 100 && 'visible'} `}>
      <Header progress={progress} />
      <div className="app">
        <div className="header">
          <div className="menu-circle"></div>
          <div className="header-menu">
            <a className="menu-link is-active" href="#">
              Apps
            </a>
            <a className="menu-link notify" href="#">
              Your work
            </a>
            <a className="menu-link" href="#">
              Discover
            </a>
            <a className="menu-link notify" href="#">
              Market
            </a>
          </div>
          <div className="search-bar">
            <input type="text" placeholder="Search" />
          </div>
          <div className="header-profile">
            <div className="notification">
              <span className="notification-number">3</span>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="left-side">
            <div className="side-wrapper">
              <div className="side-title">Apps</div>
              <div className="side-menu">
                <a href="#">All Apps</a>
              </div>
            </div>
            <div className="side-wrapper">
              <div className="side-title">Categories</div>
              <div className="side-menu">
                <a href="#">Photography</a>
                <a href="#">Graphic Design</a>
                <a href="#">Video</a>
                <a href="#">Illustrations</a>
                <a href="#">UI/UX</a>
                <a href="#">3D/AR</a>
              </div>
            </div>
            <div className="side-wrapper">
              <div className="side-title">Fonts</div>
              <div className="side-menu">
                <a href="#">Manage Fonts</a>
              </div>
            </div>
            <div className="side-wrapper">
              <div className="side-title">Resource Links</div>
              <div className="side-menu">
                <a href="#">Stock</a>
                <a href="#">Tutorials</a>
                <a href="#">Portfolio</a>
                <a href="#">Behance</a>
                <a href="#">Social Forum</a>
              </div>
            </div>
          </div>
          <div className="main-container">
            <div className="main-header">
              <a className="menu-link-main" href="#">
                All Apps
              </a>
              <div className="header-menu">
                <a className="main-header-link is-active" href="#">
                  Desktop
                </a>
                <a className="main-header-link" href="#">
                  Mobile
                </a>
                <a className="main-header-link" href="#">
                  Web
                </a>
              </div>
            </div>
            <div className="content-wrapper">
              <div className="content-wrapper-header">
                <div className="content-wrapper-context">
                  <h3 className="img-content">Adobe Stock</h3>
                  <div className="content-text">
                    Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan and find perfect image,
                    that will help you with your new project.
                  </div>
                  <button className="content-button">Start free trial</button>
                </div>
                <img className="content-wrapper-img" src="https://assets.codepen.io/3364143/glass.png" alt="" />
              </div>
              <div className="content-section">
                <div className="content-section-title">Installed</div>
                <ul>
                  <li className="adobe-product">
                    <div className="products">Photoshop</div>
                    <span className="status">
                      <span className="status-circle green"></span>
                      Updated
                    </span>
                    <div className="button-wrapper">
                      <button className="content-button status-button open">Open</button>
                      <div className="menu">
                        <button className="dropdown">
                          <ul>
                            <li>
                              <a href="#">Go to Discover</a>
                            </li>
                            <li>
                              <a href="#">Learn more</a>
                            </li>
                            <li>
                              <a href="#">Uninstall</a>
                            </li>
                          </ul>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="adobe-product">
                    <div className="products">Illustrator</div>

                    <span className="status">
                      <span className="status-circle"></span>
                      Update Available
                    </span>
                    <div className="button-wrapper">
                      <button className="content-button status-button">Update this app</button>
                      <div className="pop-up">
                        <div className="pop-up__title">Update This App</div>
                        <div className="pop-up__subtitle">
                          Adjust your selections for advanced options as desired before continuing.{' '}
                          <a href="#">Learn more</a>
                        </div>
                        <div className="checkbox-wrapper">
                          <input type="checkbox" id="check1" className="checkbox" />
                          <label htmlFor="check1">Import previous settings and preferences</label>
                        </div>
                        <div className="checkbox-wrapper">
                          <input type="checkbox" id="check2" className="checkbox" />
                          <label htmlFor="check2">Remove old versions</label>
                        </div>
                        <div className="content-button-wrapper">
                          <button className="content-button status-button open close">Cancel</button>
                          <button className="content-button status-button">Continue</button>
                        </div>
                      </div>
                      <div className="menu">
                        <button className="dropdown">
                          <ul>
                            <li>
                              <a href="#">Go to Discover</a>
                            </li>
                            <li>
                              <a href="#">Learn more</a>
                            </li>
                            <li>
                              <a href="#">Uninstall</a>
                            </li>
                          </ul>
                        </button>
                      </div>
                    </div>
                  </li>
                  <li className="adobe-product">
                    <div className="products">After Effects</div>
                    <span className="status">
                      <span className="status-circle green"></span>
                      Updated
                    </span>
                    <div className="button-wrapper">
                      <button className="content-button status-button open">Open</button>
                      <div className="menu">
                        <button className="dropdown">
                          <ul>
                            <li>
                              <a href="#">Go to Discover</a>
                            </li>
                            <li>
                              <a href="#">Learn more</a>
                            </li>
                            <li>
                              <a href="#">Uninstall</a>
                            </li>
                          </ul>
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="content-section">
                <div className="content-section-title">Apps in your plan</div>
                <div className="apps-card">
                  <div className="app-card">
                    <span>Premiere Pro</span>
                    <div className="app-card__subtext">Edit, master and create fully proffesional videos</div>
                    <div className="app-card-buttons">
                      <button className="content-button status-button">Update</button>
                      <div className="menu"></div>
                    </div>
                  </div>
                  <div className="app-card">
                    <span>InDesign</span>
                    <div className="app-card__subtext">Design and publish great projects & mockups</div>
                    <div className="app-card-buttons">
                      <button className="content-button status-button">Update</button>
                      <div className="menu"></div>
                    </div>
                  </div>
                  <div className="app-card">
                    <span>After Effects</span>
                    <div className="app-card__subtext">Industry Standart motion graphics & visual effects</div>
                    <div className="app-card-buttons">
                      <button className="content-button status-button">Update</button>
                      <div className="menu"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay-app"></div>
      </div>
      <Footer progress={progress} />
    </HomeWrapper>
  );
};

const HomeWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  outline: none;
  background: url(${require('../assets/wallpaper.jpg')}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2em;
  width: 100%;
  height: 100vh;
  opacity: 0;
  visibility: hidden;
  transition: all 400ms ease-in-out;
  &.visible {
    opacity: 1;
    visibility: visible;
    transition: all 400ms ease-in-out;
  }
  @media screen and (max-width: 480px) {
    padding: 0.8em;
  }
  .app {
    background-color: var(--theme-bg-color);
    max-width: 1250px;
    max-height: 860px;
    height: 75vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    width: 100%;
    border-radius: 14px;
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    font-size: 15px;
    font-weight: 500;
  }

  .header {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    height: 58px;
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    padding: 0 30px;
    white-space: nowrap;
    @media screen and (max-width: 480px) {
      padding: 0 16px;
    }
    &-menu {
      display: flex;
      align-items: center;
      a {
        padding: 20px 30px;
        text-decoration: none;
        color: var(--inactive-color);
        border-bottom: 2px solid transparent;
        transition: 0.3s;
        @media screen and (max-width: 610px) {
          &:not(.main-header-link) {
            display: none;
          }
        }
        &.is-active,
        &:hover {
          color: var(--theme-color);
          border-bottom: 2px solid var(--theme-color);
        }
      }
    }
  }

  .notify {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      background-color: #3a6df0;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      right: 20px;
      top: 16px;
    }
    @media screen and (max-width: 1055px) {
      display: none;
    }
  }

  .menu-circle {
    width: 15px;
    height: 15px;
    background-color: #f96057;
    border-radius: 50%;
    box-shadow:
      24px 0 0 0 #f8ce52,
      48px 0 0 0 #5fcf65;
    margin-right: 195px;
    flex-shrink: 0;
    @media screen and (max-width: 945px) {
      display: none;
    }
  }

  .search-bar {
    height: 40px;
    display: flex;
    width: 100%;
    max-width: 400px;
    padding-left: 16px;
    border-radius: 4px;
    input {
      width: 100%;
      height: 100%;
      border: none;
      background-color: var(--search-bg);
      border-radius: 4px;
      font-size: 15px;
      font-weight: 500;
      padding: 0 20px 0 40px;
      box-shadow: 0 0 0 2px rgb(134 140 160 / 2%);
      background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 56.966 56.966' fill='%23717790c7'%3e%3cpath d='M55.146 51.887L41.588 37.786A22.926 22.926 0 0046.984 23c0-12.682-10.318-23-23-23s-23 10.318-23 23 10.318 23 23 23c4.761 0 9.298-1.436 13.177-4.162l13.661 14.208c.571.593 1.339.92 2.162.92.779 0 1.518-.297 2.079-.837a3.004 3.004 0 00.083-4.242zM23.984 6c9.374 0 17 7.626 17 17s-7.626 17-17 17-17-7.626-17-17 7.626-17 17-17z'/%3e%3c/svg%3e");
      background-size: 14px;
      background-repeat: no-repeat;
      background-position: 16px 48%;
      color: var(--theme-color);
      &::placeholder {
        color: var(--inactive-color);
        font-size: 15px;
        font-weight: 500;
      }
    }
  }

  .header-profile {
    display: flex;
    align-items: center;
    padding: 0 16px 0 40px;
    margin-left: auto;
    flex-shrink: 0;
    width: 176px;
    svg {
      width: 22px;
      color: #f9fafb;
      flex-shrink: 0;
    }
  }

  .notification {
    position: relative;
    &-number {
      position: absolute;
      background-color: #3a6df0;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      font-size: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      right: -6px;
      top: -6px;
    }
    & + svg {
      margin-left: 22px;
      @media screen and (max-width: 945px) {
        display: none;
      }
    }
  }

  .profile-img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid var(--theme-color);
    margin-left: 22px;
  }

  .wide {
    .header-menu,
    .header-profile {
      display: none;
    }
    .search-bar {
      max-width: 600px;
      margin: auto;
      transition: 0.4s;
      box-shadow: 0 0 0 1px var(--border-color);
      padding-left: 0;
    }
    .menu-circle {
      margin-right: 0;
    }
  }

  .wrapper {
    display: flex;
    flex-grow: 1;
    overflow: hidden;
  }

  .left-side {
    flex-basis: 240px;
    border-right: 1px solid var(--border-color);
    padding: 26px;
    overflow: auto;
    flex-shrink: 0;
    @media screen and (max-width: 945px) {
      display: none;
    }
  }

  .side-wrapper + .side-wrapper {
    margin-top: 20px;
  }

  .side-title {
    color: var(--inactive-color);
    margin-bottom: 14px;
  }

  .side-menu {
    display: flex;
    flex-direction: column;
    white-space: nowrap;
    a {
      text-decoration: none;
      color: var(--theme-color);
      display: flex;
      align-items: center;
      font-weight: 400;
      padding: 10px;
      font-size: 14px;
      border-radius: 6px;
      transition: 0.3s;
      &:hover {
        background-color: var(--hover-menu-bg);
      }
    }
    svg {
      width: 16px;
      margin-right: 8px;
    }
  }

  .updates {
    position: relative;
    top: 0;
    right: 0;
    margin-left: auto;
    width: 18px;
    height: 18px;
    font-size: 11px;
  }

  .main-header {
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    height: 58px;
    flex-shrink: 0;
    .header-menu {
      margin-left: 150px;
      @media screen and (max-width: 1055px) {
        margin: auto;
      }
      a {
        padding: 20px 24px;
      }
    }
  }

  .main-container {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .menu-link-main {
    text-decoration: none;
    color: var(--theme-color);
    padding: 0 30px;
    @media screen and (max-width: 1055px) {
      display: none;
    }
  }

  .content-wrapper {
    display: flex;
    flex-direction: column;
    color: var(--theme-color);
    padding: 20px 40px;
    height: 100%;
    overflow: auto;
    background-color: var(--theme-bg-color);
    @media screen and (max-width: 510px) {
      padding: 20px;
    }
    &-header {
      display: flex;
      align-items: center;
      //width: 100%;
      justify-content: space-between;
      background-image: url('https://www.transparenttextures.com/patterns/cubes.png'),
        linear-gradient(
          to right top,
          #cf4af3,
          #e73bd7,
          #f631bc,
          #fd31a2,
          #ff3a8b,
          #ff4b78,
          #ff5e68,
          #ff705c,
          #ff8c51,
          #ffaa49,
          #ffc848,
          #ffe652
        );
      border-radius: 14px;
      padding: 20px 40px;
      @media screen and (max-width: 415px) {
        padding: 20px;
      }
    }
    &.overlay {
      pointer-events: none;
      transition: 0.3s;
      background-color: var(--overlay-bg);
    }
  }

  .overlay-app {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    pointer-events: all;
    background-color: rgba(36, 39, 59, 0.8);
    opacity: 0;
    visibility: hidden;
    transition: 0.3s;
    &.is-active {
      visibility: visible;
      opacity: 1;
    }
  }

  .img-content {
    font-weight: 500;
    font-size: 17px;
    display: flex;
    align-items: center;
    margin: 0;
    svg {
      width: 28px;
      margin-right: 14px;
    }
  }

  .content-text {
    font-weight: 400;
    font-size: 14px;
    margin-top: 16px;
    line-height: 1.7em;
    color: #ebecec;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .content-wrapper-context {
    max-width: 350px;
  }

  .content-button {
    background-color: #3a6df0;
    border: none;
    padding: 8px 26px;
    color: #fff;
    border-radius: 20px;
    margin-top: 16px;
    cursor: pointer;
    transition: 0.3s;
    white-space: nowrap;
  }

  .content-wrapper-img {
    width: 186px;
    object-fit: cover;
    margin-top: -25px;
    object-position: center;
    @media screen and (max-width: 570px) {
      width: 110px;
    }
  }

  .content-section {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    &-title {
      color: var(--content-title-color);
      margin-bottom: 14px;
    }
    ul {
      display: flex;
      flex-direction: column;
      //width: 100%;
      height: 100%;
      justify-content: space-around;
      background-color: var(--content-bg);
      padding-left: 0;
      margin: 0;
      border-radius: 14px;
      border: 1px solid var(--theme-bg-color);
      cursor: pointer;
      li {
        list-style: none;
        padding: 10px 18px;
        display: flex;
        align-items: center;
        font-size: 16px;
        //width: 100%;
        height: 100%;
        white-space: nowrap;
        transition: 0.3s;
        &:hover {
          background-color: var(--theme-bg-color);
          &:first-child {
            border-radius: 13px 13px 0 0;
          }
          &:last-child {
            border-radius: 0 0 13px 13px;
          }
        }
        & + li {
          border-top: 1px solid var(--border-color);
        }
      }
      svg {
        width: 28px;
        border-radius: 6px;
        margin-right: 16px;
        flex-shrink: 0;
      }
    }
  }

  .products {
    display: flex;
    align-items: center;
    width: 150px;
    @media screen and (max-width: 480px) {
      width: 120px;
    }
  }
  .status {
    margin-left: auto;
    width: 140px;
    font-size: 15px;
    position: relative;
    @media screen and (max-width: 700px) {
      display: none;
    }
    &-circle {
      width: 6px;
      height: 6px;
      background-color: #396df0;
      position: absolute;
      border-radius: 50%;
      top: 4px;
      left: -20px;
      &.green {
        background-color: #3bf083;
      }
    }
    &-button {
      font-size: 15px;
      margin-top: 0;
      padding: 6px 24px;
      @media screen and (max-width: 390px) {
        padding: 6px 14px;
      }
      &.open {
        background: none;
        color: var(--button-inactive);
        border: 1px solid var(--button-inactive);
      }
      &:not(.open):hover {
        color: #fff;
        border-color: #fff;
      }
    }
  }

  .content-button:not(.open):hover {
    background: #1e59f1;
  }

  .menu {
    width: 5px;
    height: 5px;
    background-color: var(--button-inactive);
    border-radius: 50%;
    box-shadow:
      7px 0 0 0 var(--button-inactive),
      14px 0 0 0 var(--button-inactive);
    margin: 0 12px;
  }

  @media screen and (max-width: 415px) {
    .adobe-product .menu {
      display: none;
    }
  }

  .dropdown {
    position: relative;
    height: 53px;
    width: 40px;
    top: -24px;
    display: flex;
    left: -5px;
    background: transparent;
    border: none;
    cursor: pointer;
    ul {
      position: absolute;
      background: var(--dropdown-bg);
      height: 110px;
      width: 120px;
      right: 0;
      top: 20px;
      pointer-events: none;
      opacity: 0;
      transform: translatey(10px);
      transition: all 0.4s ease;
      li a {
        text-decoration: none;
        color: var(--theme-color);
        font-size: 12px;
      }
    }
  }

  .dropdown.is-active {
    ul {
      opacity: 1;
      pointer-events: all;
      transform: translatey(25px);
      li:hover {
        background-color: var(--dropdown-hover);
      }
    }
  }

  .button-wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 187px;
    margin-left: auto;
    @media screen and (max-width: 480px) {
      width: auto;
    }
  }

  .pop-up {
    position: absolute;
    padding: 30px 40px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.4);
    transition: all 0.3s;
    z-index: 10;
    background-color: var(--popup-bg);
    width: 500px;
    visibility: hidden;
    opacity: 0;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    white-space: normal;
    @media screen and (max-width: 570px) {
      width: 100%;
    }
    &.visible {
      visibility: visible;
      opacity: 1;
    }
    &__title {
      padding-bottom: 20px;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    &__subtitle {
      white-space: normal;
      margin: 20px 0;
      font-size: 14px;
      font-weight: 400;
      line-height: 1.8em;
      a {
        color: var(--theme-color);
      }
    }
  }

  .content-button-wrapper .content-button.status-button.open.close {
    width: auto;
  }

  .content-section .close {
    margin-right: 0;
    width: 24px;
  }

  .checkbox-wrapper {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    & + .checkbox-wrapper {
      margin: 20px 0 40px;
    }
  }

  .checkbox {
    display: none;
  }

  .checkbox + label {
    display: flex;
    align-items: center;
    &:before {
      content: '';
      margin-right: 10px;
      width: 15px;
      height: 15px;
      border: 1px solid var(--theme-color);
      border-radius: 4px;
      cursor: pointer;
      flex-shrink: 0;
    }
  }

  .checkbox:checked + label:before {
    background-color: #3a6df0;
    border-color: #3a6df0;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23fff' stroke-width='3' stroke-linecap='round' stroke-linejoin='round' class='feather feather-check'%3e%3cpath d='M20 6L9 17l-5-5'/%3e%3c/svg%3e");
    background-position: 50%;
    background-size: 12px;
    background-repeat: no-repeat;
  }

  .content-button-wrapper {
    margin-top: auto;
    margin-left: auto;
    .open {
      margin-right: 8px;
    }
  }

  .apps-card {
    display: flex;
    align-items: center;
    //flex-wrap: wrap;
    //width: calc(100% + 20px);
  }

  .app-card {
    display: flex;
    flex-direction: column;
    width: calc(33.3% - 20px);
    font-size: 16px;
    background-color: var(--content-bg);
    border-radius: 14px;
    border: 1px solid var(--theme-bg-color);
    padding: 20px;
    cursor: pointer;
    transition: 0.3s ease;
    &:hover {
      transform: scale(1.02);
      background-color: var(--theme-bg-color);
    }
    svg {
      width: 28px;
      border-radius: 6px;
      margin-right: 12px;
      flex-shrink: 0;
    }
    & + .app-card {
      margin-left: 20px;
    }
    span {
      display: flex;
      align-items: center;
    }
    &__subtext {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.6em;
      margin-top: 20px;
      border-bottom: 1px solid var(--border-color);
      padding-bottom: 20px;
    }
    &-buttons {
      display: flex;
      align-items: center;
      margin-left: auto;
      margin-top: 16px;
    }
    @media screen and (max-width: 1110px) {
      width: calc(50% - 20px);
      &:last-child {
        margin-top: 20px;
        margin-left: 0;
      }
    }
    @media screen and (max-width: 565px) {
      width: calc(100% - 20px);
      margin-top: 20px;
      & + .app-card {
        margin-left: 0;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--scrollbar-bg);
    border-radius: 10px;
  }
`;

export default Home;
