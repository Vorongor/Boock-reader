import React from 'react';
import style from './introText.module.css';
function ItroText() {
  return (
    <div className={style.texBox}>
      <h1 className={style.title}>Books Reading</h1>
      <div className={style.listBox}>
        <h2 className={style.listTitle}>Will help you to</h2>
        <ul className={style.list}>
          <li className={style.item}>
            Create your goal faster and proceed to read
          </li>
          <li className={style.item}>
            Divide process proportionally for each day
          </li>
          <li className={style.item}>Track your success</li>
        </ul>
      </div>
      <div className={style.listBox}>
        <h2 className={style.listTitle}>You may also</h2>
        <ul className={style.list}>
          <li className={style.item}>
            Pose your own independent point of view
          </li>
          <li className={style.item}>
            Improve your professional skills according to new knowledge
          </li>
          <li className={style.item}>Become an interesting interlocutor</li>
        </ul>
      </div>
    </div>
  );
}
export default ItroText;
