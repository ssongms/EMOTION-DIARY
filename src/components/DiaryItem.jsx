import "../style/DiaryItem.css";

import Button from "./Button";
import { getEmotionImage } from "../utils/get-emotion-image";
import { useNavigate } from "react-router-dom";

const DiaryItem = ({ id, emotionId, createdDate, content }) => {
  const navigate = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        onClick={() => navigate(`/diary/${id}`)}
        className={`img_section img_section_${emotionId}`}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date(createdDate).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button
          text={"수정하기"}
          onClick={() => {
            navigate(`/edit/${id}`);
          }}
        />
      </div>
    </div>
  );
};

export default DiaryItem;
