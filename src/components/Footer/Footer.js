import React, { memo } from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer container">
      <div className="footer__content"></div>
      <div>
        <div className=" pt-5">
          <div className="row">
            <div className="col-md-3 col-6 footer__listItemContact">
              <ul className="footer__contact-link">
                <li>
                  <strong> Products </strong>
                </li>
                <li className="text-light font-weigh-bold pb-2">
                  Blockchain Explorer
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Crypto API
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Crypto Indices
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Interest
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Jobs Board
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6 footer__listItemContact">
              <ul className="footer__contact-link">
                <li>
                  <strong> Company </strong>
                </li>
                <li className="text-light font-weigh-bold pb-2">About us</li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Terms of use
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Methodology
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    CareersWe’re hiring!
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6 footer__listItemContact">
              <ul className="footer__contact-link">
                <li>
                  <strong> Support </strong>
                </li>
                <li className="text-light font-weigh-bold pb-2">
                  Request Form
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Contact Support
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    FAQ
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Glossary
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-6 footer__listItemContact">
              <ul className="footer__contact-link">
                <li>
                  <strong> Socials </strong>
                </li>
                <li className="text-light font-weigh-bold pb-2">Facebook</li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Telegram
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Instagram
                  </a>
                </li>
                <li>
                  <a className="footer-link font-weight-light" href="/">
                    Interactive Chat
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__logo text-center">
          <p className="footer__content__text__title">
            Copyright 2022 @ <strong> Shop Coin USA </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
