import React, { useState } from 'react';
import style from './TrainingList.module.css';
import NewTraining from 'components/NewTraining/NewTraining';
import { useSelector } from 'react-redux';
import BoockList from 'components/BoockList/BoockList';
function TrainingList() {
  const [isTrainingContinue, setTrainingCondition] = useState(false);
  const [buttonContent, setBtnContent] = useState('Start traning');
  const arr = useSelector(state => state.liba.goingToRead);
  function handleStart() {
    setTrainingCondition(!isTrainingContinue);
    if (isTrainingContinue) {
      setBtnContent('Start training');
    } else {
      setBtnContent('Finish training');
    }
  }

  return (
    <section className={style.container}>
      <div className={style.addTraining}>
        <NewTraining />
      </div>
      <div className={style.box}>
        <BoockList arr={arr} option={true} />
      </div>
      <button type="button" onClick={handleStart} className={style.start}>
        {buttonContent}
      </button>
    </section>
  );
}
export default TrainingList;
