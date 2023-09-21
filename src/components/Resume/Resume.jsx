import React, { useEffect, useState } from 'react';
import style from './Resume.module.css';
import { useDispatch } from 'react-redux';
import { setModalOff } from 'redux/user/slice';

function Resume() {
  const dispatch = useDispatch();
  const [rating, setRating] = useState(1); // Початковий рейтинг

  const handleRatingChange = e => {
    const newRating = parseInt(e.target.value, 10); // Парсимо введене значення як ціле число
    if (!isNaN(newRating) && newRating >= 1 && newRating <= 5) {
      setRating(newRating); // Встановлюємо новий рейтинг, якщо введене значення в діапазоні від 1 до 5
    }
  };

  function handleBack() {
    dispatch(setModalOff());
  }

  // Додаємо обробник події клавіші "Escape"
  

  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.key === 'Escape') {
        dispatch(setModalOff());
      }
    };
    // Додаємо обробник події клавіші "Escape" після монтування компонента
    window.addEventListener('keydown', handleEscapeKey);

    // Пам'ятайте про видалення обробника події після розмонтування компонента
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, []);

  return (
    <div className={style.resumeBack}>
      <div className={style.block}>
        <form action="submit" className={style.form}>
          <label className={style.label} htmlFor="ratingResume">
            Choose rating of the book
            <input
              type="range"
              id="ratingResume"
              name="ratingResume"
              min="1"
              max="5"
              value={rating}
              onChange={handleRatingChange}
              className={style.ratingInput}
            />
          </label>
          <label className={style.label} htmlFor="textarea">
            Resume
            <textarea
              name="textarea"
              id="textarea"
              placeholder="..."
              className={style.textarea}
            ></textarea>
          </label>
          <div>
            <button type="button" onClick={handleBack} className={style.back}>
              Back
            </button>
            <button type="submit" className={style.save}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Resume;
