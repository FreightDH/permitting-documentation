import cl from './Services.module.scss';

const Services = () => {
  return (
    <section className={cl.services}>
      <div className="services__container">
        <div className={cl.services__body}>
          <h2 className={cl.services__title}>Наши услуги</h2>
          <ul className={cl.services__list}>
            <li className={cl.services__item}>Оформление заявки ФГБУ «ВНИИР»</li>
            <li className={cl.services__item}>Оформление Заключений Минпромторг</li>
            <li className={cl.services__item}>Оформление Решений ИП</li>
            <li className={cl.services__item}>Оформление Программ и методик</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
