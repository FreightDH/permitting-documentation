import cl from './Description.module.scss';

const Description = () => {
  return (
    <section className={cl.description}>
      <div className="description__container">
        <div className={cl.description__body}>
          <p className={cl.description__text}>
            Наша компания предлагает полный спектр услуг по разработке и оформлению документации для различных
            сфер деятельности.
          </p>
          <p className={cl.description__text}>
            Мы специализируемся на разработке разрешающей документации для применения продукции иностранного
            производства, а также предоставляем услуги по оформлению заявок в ФГБУ {'"ВНИИР"'}, заключений
            Минпромторга, решений для индивидуальных предпринимателей, программ и методик.
          </p>
          <p className={cl.description__text}>
            Наша команда профессионалов обладает обширным опытом в оформлении документации, и мы гарантируем
            качество, своевременное выполнение заказов и индивидуальный подход к каждому клиенту. Мы стремимся
            обеспечить наших клиентов необходимыми документами для успешной и безопасной деятельности в
            соответствии с требованиями законодательства и нормативными актами.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;