import { Arrows } from 'shared';
import { bg } from 'assets';
import cl from './Intro.module.scss';

const Intro = () => {
  return (
    <section className={cl.intro}>
      <div className={cl.intro__body}>
        <div className={cl.intro__content}>
          <h1 className={cl.intro__title}>Разработка разрешающей документации</h1>
          <p className={cl.intro__text}>
            Разработка разрешающей документации на применение продукции иностранного производства
          </p>
          <a href="#request" className={cl.intro__button}>
            Оставить заявку
          </a>
        </div>
      </div>
      <div className={cl.intro__background}>
        <img src={bg} alt="background" />
      </div>
      <Arrows />
    </section>
  );
};

export default Intro;
