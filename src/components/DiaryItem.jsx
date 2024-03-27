import "../style/DiaryItem.css";

import Button from "./Button";
import { getEmotionImage } from "../utils/get-emotion-image";
const DiaryItem = () => {
  return (
    <div className="DiaryItem">
      <div className="img_section">
        <img src={getEmotionImage(1)} />
      </div>
      <div className="info_section">
        <div className="created_date">{new Date().toLocaleDateString()}</div>
        <div className="content">일기 컨텐츠</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} />
      </div>
    </div>
  );
};

export default DiaryItem;
