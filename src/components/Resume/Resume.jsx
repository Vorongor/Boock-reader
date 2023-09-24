import React, { useEffect, useState } from 'react';
import style from './Resume.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOff } from 'redux/user/slice';
import { addReview } from 'redux/library/operations';
import { setId } from 'redux/library/slice';

function Resume() {
  const dispatch = useDispatch();
  const currentId = useSelector(state => state.liba.currentId);
  const [rating, setRating] = useState(1);
  const [feedback, setFeedBack] = useState('');

  const handleRatingChange = e => {
    const newRating = parseInt(e.target.value, 10);
    if (!isNaN(newRating) && newRating >= 1 && newRating <= 5) {
      setRating(newRating);
    }
  };
  function handleFeedbackChange(e) {
    setFeedBack(e.target.value);
  }

  function handleBack() {
    dispatch(setModalOff());
  }

  useEffect(() => {
    const handleEscapeKey = e => {
      if (e.key === 'Escape') {
        dispatch(setModalOff());
      }
    };

    window.addEventListener('keydown', handleEscapeKey);
    return () => {
      window.removeEventListener('keydown', handleEscapeKey);
    };
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    console.log(`id: ${currentId}, rating: ${rating}, feedBack: ${feedback}`);
    const feedbackData = {
      rating: rating,
      feedback: feedback,
    };
    dispatch(addReview(currentId, feedbackData));
    dispatch(setId(null));
    dispatch(setModalOff());
    form.reset();
  }

  return (
    <div className={style.resumeBack}>
      <div className={style.block}>
        <form action="submit" className={style.form} onSubmit={handleSubmit}>
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
              name="feedback"
              id="textarea"
              placeholder="..."
              className={style.textarea}
              onChange={handleFeedbackChange}
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
