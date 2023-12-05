import { useForm } from 'react-hook-form';
import { CustomInput, isEmpty } from 'shared';
import cl from './Form.module.scss';

const Form = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur' });

  const onSubmit = (event) => {
    event.preventDefault;
    reset();
  };

  return (
    <form action="#" onSubmit={handleSubmit(onSubmit)} className={cl.form}>
      <CustomInput
        label="Название компании / Имя"
        type="text"
        name="company"
        // value={email}
        // onChange={handleEmailChange}
        register={register}
        errors={errors}
        validationSchema={{
          required: 'Это поле обязательно к заполнению!',
          validate: isEmpty,
        }}
        required
      />
      <CustomInput
        label="Адрес электронной почты"
        type="email"
        name="email"
        // value={email}
        // onChange={handleEmailChange}
        register={register}
        errors={errors}
        validationSchema={{
          required: 'Это поле обязательно к заполнению!',
        }}
        required
      />
      <CustomInput
        label="Контактный номер телефона"
        type="tel"
        name="phone"
        // value={email}
        // onChange={handleEmailChange}
        register={register}
        errors={errors}
        validationSchema={{}}
      />
      <div className={cl.form__item}>
        <label className={cl.form__label}>Название проекта / Краткое ТЗ</label>
        <textarea rows="10" className={cl.form__textarea}></textarea>
      </div>
      <button className={cl.form__button}>Оставить заявку</button>
    </form>
  );
};

export default Form;
