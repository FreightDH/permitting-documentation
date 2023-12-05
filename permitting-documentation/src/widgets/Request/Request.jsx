import { Form } from 'features';
import cl from './Request.module.scss';

const Request = () => {
  return (
    <section className={cl.request} id="request">
      <div className="request__container">
        <div className={cl.request__body}>
          <h2 className={cl.request__title}>Оставить заявку</h2>
          <p className={cl.request__text}>
            Для получения консультации и уточнения возможности выполнения Ваших задач, Вы можете связаться с
            нами по телефону или оставить заявку на обратный звонок, заполнив форму ниже.
          </p>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Request;
