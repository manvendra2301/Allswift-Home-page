import React from 'react'
import $ from "jquery";


export const Header = () => {
  return (
    <div>
      <header className="nav-menu-two">
        <div
          className="navbar-menu-container-two w-nav"
          data-animation="over-left"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
        >
          <div className="w-layout-blockcontainer main-container w-container">
            <div className="navbar-wrapper">
              <a className="navbar-brand w-nav-brand" href="/">
                <img
                  alt="Logo"
                  loading="lazy"
                  src="https://cdn.prod.website-files.com/6509176963fe4ef34ed8b7e1/651be430c70a6abcd29125a4_logo.png"
                />
              </a>
              <nav className="nav-menu-wrapper w-nav-menu" role="navigation">
                <ul className="nav-menu-list-wrapper w-list-unstyled" role="list">
                  <li className="mobile-menu-logo">
                    <a className="navbar-brand w-nav-brand" href="#">
                      <img
                        alt="Logo"
                        loading="lazy"
                        src="https://cdn.prod.website-files.com/6509176963fe4ef34ed8b7e1/650922be29d2d0e26243df28_UBIQ..png"
                      />
                    </a>
                  </li>
                  <li className="nav-list-item">
                    <div
                      className="nav-dropdown w-dropdown"
                      data-delay="0"
                      data-hover="false"
                    >
                      <div className="nav-dropdown-toggle w-dropdown-toggle">
                        <div className="nav-link-container">
                          <div className="nav-link-block">
                            <div className="nav-link-text">Home</div>
                            <div className="nav-link-text-gradient">Home</div>
                          </div>
                        </div>
                        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                      </div>
                      <nav className="nav-dropdown-list w-dropdown-list">
                        <div className="nav-dropdown-link-wrapper">
                          <div className="nav-link-container">
                            <a
                              className="nav-link-block dropdown w-inline-block"
                              href="/home/home-one"
                            >
                              <div className="nav-link-text">Home One</div>
                              <div className="nav-link-text-gradient">Home One</div>
                            </a>
                          </div>
                          <div className="nav-link-container">
                            <a
                              aria-current="page"
                              className="nav-link-block dropdown w-inline-block w--current"
                              href="/home/home-two"
                            >
                              <div className="nav-link-text">Home Two</div>
                              <div className="nav-link-text-gradient">Home Two</div>
                            </a>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </li>
                  <li className="nav-list-item">
                    <div
                      className="nav-dropdown w-dropdown"
                      data-delay="0"
                      data-hover="false"
                    >
                      <div className="nav-dropdown-toggle w-dropdown-toggle">
                        <div className="nav-link-container">
                          <div className="nav-link-block">
                            <div className="nav-link-text">Services</div>
                            <div className="nav-link-text-gradient">Services</div>
                          </div>
                        </div>
                        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                      </div>
                      <nav className="nav-dropdown-list service w-dropdown-list">
                        <div className="nav-dropdown-link-wrapper">
                          <div className="nav-link-container">
                            <a
                              className="nav-link-block dropdown w-inline-block"
                              href="/our-services"
                            >
                              <div className="nav-link-text">All Services</div>
                              <div className="nav-link-text-gradient">
                                All Services
                              </div>
                            </a>
                          </div>
                          <div className="service-list-wrapper w-dyn-list">
                            <div className="service-list w-dyn-items" role="list">
                              <div
                                className="service-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/services/artificial-intelligence"
                                  >
                                    <div className="nav-link-text">
                                      Artificial Intelligence
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Artificial Intelligence
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="service-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/services/cloud-solutions"
                                  >
                                    <div className="nav-link-text">
                                      Cloud Solutions
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Cloud Solutions
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="service-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/services/data-analytics"
                                  >
                                    <div className="nav-link-text">
                                      Data Analytics
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Data Analytics
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="service-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/services/cyber-security"
                                  >
                                    <div className="nav-link-text">
                                      Cyber Security
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Cyber Security
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="service-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/services/software-development"
                                  >
                                    <div className="nav-link-text">
                                      Software Development
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Software Development
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="service-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/services/database-security"
                                  >
                                    <div className="nav-link-text">
                                      Database Security
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Database Security
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </li>
                  <li className="nav-list-item">
                    <div
                      className="nav-dropdown w-dropdown"
                      data-delay="0"
                      data-hover="false"
                    >
                      <div className="nav-dropdown-toggle w-dropdown-toggle">
                        <div className="nav-link-container">
                          <div className="nav-link-block">
                            <div className="nav-link-text">Projects</div>
                            <div className="nav-link-text-gradient">Projects</div>
                          </div>
                        </div>
                        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                      </div>
                      <nav className="nav-dropdown-list project w-dropdown-list">
                        <div className="nav-dropdown-link-wrapper">
                          <div className="nav-link-container">
                            <a
                              className="nav-link-block dropdown w-inline-block"
                              href="/our-projects"
                            >
                              <div className="nav-link-text">All Projects</div>
                              <div className="nav-link-text-gradient">
                                All Projects
                              </div>
                            </a>
                          </div>
                          <div className="project-list-wrapper w-dyn-list">
                            <div className="project-list w-dyn-items" role="list">
                              <div
                                className="project-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/project/software-development"
                                  >
                                    <div className="nav-link-text">
                                      Software Development
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Software Development
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="project-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/project/artificial-intelligence"
                                  >
                                    <div className="nav-link-text">
                                      Artificial Intelligence
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Artificial Intelligence
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="project-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/project/data-analytics"
                                  >
                                    <div className="nav-link-text">
                                      Data Analytics
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Data Analytics
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="project-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/project/cyber-security"
                                  >
                                    <div className="nav-link-text">
                                      Cyber Security
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Cyber Security
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="project-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/project/database-security"
                                  >
                                    <div className="nav-link-text">
                                      Database Security
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Database Security
                                    </div>
                                  </a>
                                </div>
                              </div>
                              <div
                                className="project-item-nav w-dyn-item"
                                role="listitem"
                              >
                                <div className="nav-link-container">
                                  <a
                                    className="nav-link-block dropdown w-inline-block"
                                    href="/project/cloud-solutions"
                                  >
                                    <div className="nav-link-text">
                                      Cloud Solutions
                                    </div>
                                    <div className="nav-link-text-gradient">
                                      Cloud Solutions
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </li>
                  <li className="nav-list-item">
                    <div className="nav-link-container">
                      <a className="nav-link-block w-inline-block" href="/about">
                        <div className="nav-link-text">About</div>
                        <div className="nav-link-text-gradient">About</div>
                      </a>
                    </div>
                  </li>
                  <li className="nav-list-item">
                    <div
                      className="nav-dropdown w-dropdown"
                      data-delay="0"
                      data-hover="false"
                    >
                      <div className="nav-dropdown-toggle w-dropdown-toggle">
                        <div className="nav-link-container">
                          <div className="nav-link-block">
                            <div className="nav-link-text">Pages</div>
                            <div className="nav-link-text-gradient">Pages</div>
                          </div>
                        </div>
                        <div className="nav-dropdown-icon w-icon-dropdown-toggle"></div>
                      </div>
                      <nav className="nav-dropdown-list all-pages w-dropdown-list">
                        <div className="nav-wrapper-flex">
                          <div className="nav-dropdown-link-wrapper no-shrink">
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/blog"
                              >
                                <div className="nav-link-text">Blog</div>
                                <div className="nav-link-text-gradient">Blog</div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/our-team"
                              >
                                <div className="nav-link-text">Our Team</div>
                                <div className="nav-link-text-gradient">
                                  Our Team
                                </div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/faq"
                              >
                                <div className="nav-link-text">FAQ</div>
                                <div className="nav-link-text-gradient">FAQ</div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/terms-conditions"
                              >
                                <div className="nav-link-text">
                                  Terms &amp; Conditions
                                </div>
                                <div className="nav-link-text-gradient">
                                  Terms &amp; Conditions
                                </div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/privacy-policy"
                              >
                                <div className="nav-link-text">Privacy Policy</div>
                                <div className="nav-link-text-gradient">
                                  Privacy Policy
                                </div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/sign-up"
                              >
                                <div className="nav-link-text">Create account</div>
                                <div className="nav-link-text-gradient">
                                  Create account
                                </div>
                              </a>
                            </div>
                          </div>
                          <div className="nav-separator"></div>
                          <div className="nav-dropdown-link-wrapper no-shrink">
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/log-in"
                              >
                                <div className="nav-link-text">Log in</div>
                                <div className="nav-link-text-gradient">Log in</div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/forgot-password"
                              >
                                <div className="nav-link-text">Forgot Password</div>
                                <div className="nav-link-text-gradient">
                                  Forgot Password
                                </div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/template-info/style-guide"
                              >
                                <div className="nav-link-text">Style Guide</div>
                                <div className="nav-link-text-gradient">
                                  Style Guide
                                </div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/template-info/licenses"
                              >
                                <div className="nav-link-text">Licenses</div>
                                <div className="nav-link-text-gradient">
                                  Licenses
                                </div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/template-info/changelog"
                              >
                                <div className="nav-link-text">Changelog</div>
                                <div className="nav-link-text-gradient">
                                  Changelog
                                </div>
                              </a>
                            </div>
                            <div className="nav-link-container">
                              <a
                                className="nav-link-block dropdown w-inline-block"
                                href="/template-info/instruction"
                              >
                                <div className="nav-link-text">Instruction</div>
                                <div className="nav-link-text-gradient">
                                  Instruction
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                  </li>
                  <li className="nav-list-item">
                    <div className="nav-link-container">
                      <a className="nav-link-block w-inline-block" href="/contact">
                        <div className="nav-link-text">Contact</div>
                        <div className="nav-link-text-gradient">Contact</div>
                      </a>
                    </div>
                  </li>
                  <li className="call-list-item">
                    <div className="call-wrapper">
                      <div className="call-icon-block bg-gradient-1">
                        <div
                          className="call-icon"
                          data-animation-type="lottie"
                          data-autoplay="1"
                          data-default-duration="3.033333333333333"
                          data-direction="1"
                          data-duration="0"
                          data-is-ix2-target="0"
                          data-loop="1"
                          data-renderer="svg"
                          data-src="https://cdn.prod.website-files.com/6509176963fe4ef34ed8b7e1/651119632b84173bde452ba2_Call.json"
                          data-w-id="e0f2a009-0815-b838-8ed6-ee96768d7084"
                        ></div>
                      </div>
                      <div className="call-content">
                        <div className="call-text">Call any time</div>
                        <a className="phone-number" href="tel:+12345568987">
                          +12345 568 987
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </nav>
              <div className="menu-button w-nav-button">
                <div className="w-icon-nav-menu"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
