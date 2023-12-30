import React, { useEffect, useState } from 'react';
import style from './Resume.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOff } from 'redux/user/slice';
import { addReview } from 'redux/library/operations';
import { setId } from 'redux/library/slice';
import { Rating } from 'react-simple-star-rating';

function Resume() {
  const dispatch = useDispatch();
  const currentId = useSelector(state => state.liba.currentId);
  const liba = useSelector(state => state.liba.liba);
  const book = liba.find(item => item._id === currentId);

  const [feedback, setFeedBack] = useState(book.review.comment || '');
  const [rating, setRating] = useState(book.review.rate || 0);

  const handleRating = rate => {
    setRating(rate);
    console.log(rate);
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
      id: currentId,
    };
    dispatch(addReview(feedbackData));
    dispatch(setId(null));
    dispatch(setModalOff());
    form.reset();
  }

  return (
    <div className={style.resumeBack}>
      <div className={style.block}>
        <form action="submit" className={style.form} onSubmit={handleSubmit}>
          <div className={style.ratingContainer}>
            <p className={style.ratingLabel}>Choose rating of the book:</p>
            <div className={style.starRating}>
              <Rating onClick={handleRating} />
            </div>
          </div>
          <label className={style.label} htmlFor="textarea">
            Resume
            <textarea
              name="feedback"
              id="textarea"
              placeholder="..."
              className={style.textarea}
              onChange={handleFeedbackChange}
              value={feedback}
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
