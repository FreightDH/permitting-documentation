import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CustomInput, isEmpty } from 'shared';
import cl from './Form.module.scss';

const Form = () => {
  const {
    register,
    formState: { errors },
    reset,
  } = useForm({ mode: 'onBlur' });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const xhr = new XMLHttpRequest();
    const formData = new FormData(event.target);

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    };

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);
    alert('Заявка успешно отправлена!');
    reset();
  };

  return (
    <form action="#" onSubmit={(event) => handleSubmit(event)} className={cl.form}>
      <CustomInput
        label="Название компании / Имя"
        type="text"
        name="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
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
        name="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
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
        name="Phone"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        register={register}
        errors={errors}
      />
      <div className={cl.form__item}>
        <label className={cl.form__label}>Название проекта / Краткое ТЗ</label>
        <textarea
          rows="10"
          name="Description"
          value={description}
          className={cl.form__textarea}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button className={cl.form__button}>Оставить заявку</button>
    </form>
  );
};

export default Form;
