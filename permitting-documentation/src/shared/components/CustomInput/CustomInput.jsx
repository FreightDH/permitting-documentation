import cl from './CustomInput.module.scss';

const CustomInput = ({
  label,
  type,
  name,
  required,
  value,
  onChange,
  register,
  errors,
  validationSchema,
  mask,
}) => {
  const inputClasses = [cl.input__input];
  if (errors[name]) inputClasses.push(cl.err);

  return (
    <div className={cl.input}>
      <label htmlFor={name} className={cl.input__label}>
        {label}
        {required && '*'}
      </label>
      <input
        type={type}
        id={name}
        value={value}
        className={inputClasses.join(' ')}
        {...register(name, validationSchema)}
        onChange={onChange}
      />
      {errors && errors[name] && (
        <span className={cl.input__error}>{`${errors[name]?.message || 'Ошибка!'}`}</span>
      )}
    </div>
  );
};

export default CustomInput;
