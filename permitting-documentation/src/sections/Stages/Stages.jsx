import { Stage } from 'components';
import stagesInfo from './stagesInfo';
import cl from './Stages.module.scss';

const Stages = () => {
  return (
    <section className={cl.stages}>
      <div className={cl.stages__container}>
        <div className={cl.stages__body}>
          <h2 className={cl.stages__title}>Стадии разработки разрешающей документации</h2>
          <ul className={cl.stages__list}>
            {stagesInfo.map((stage) => (
              <Stage stage={stage} key={stage.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Stages;
