import cl from './Footer.module.scss';

const Footer = () => {
  const copyrightText = ` © 2024 All Rights Reserved`;
  return (
    <footer className={cl.footer}>
      <div className="footer__container">
        <div className={cl.footer__body}>
          <ul className={cl.footer__list}>
            <li className={cl.list__item}>
              Телефон: <a href="tel: 8-977-503-04-34">8-977-503-04-34</a>
            </li>
            <li className={cl.list__item}>
              E-mail: <a href="mailto:ekb_ip@bk.ru">ekb_ip@bk.ru</a>
            </li>
          </ul>
          <p className={cl.footer__copyright}>EKB_IP © 2024 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
