import "../style/Viewer.css";

import { emotionList } from "../utils/constants";
import { getEmotionImage } from "../utils/get-emotion-image";

const Viewer = ({ emotionId, content }) => {
  const emotionItem = emotionList.find((item) => String(item.emotionId) === String(emotionId));
  return (
    <div className="Viewer">
      <div className="img_section">
        <h4>오늘의 감정</h4>
        <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
          <img src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </div>
      <div className="content_section">
        <h4>오늘의 일기</h4>
        <div className="content_wrapper">
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default Viewer;
