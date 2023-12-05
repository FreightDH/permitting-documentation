import cl from './Stage.module.scss';

const Stage = ({ stage }) => {
  return (
    <li className={cl.stage}>
      <h3 className={cl.stage__title}>
        {stage.id}. {stage.title}
      </h3>
      {stage.text.split('\n').map((sentence, index) => (
        <p className={cl.stage__text} key={index}>
          {sentence}
        </p>
      ))}
    </li>
  );
};

export default Stage;
