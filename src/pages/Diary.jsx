import Button from "../components/Button";
import Header from "../components/Header";
import Viewer from "../components/Viewer";
import { getStringedDate } from "../utils/get-stringed-date";
import useDiary from "../hooks/useDiary";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  const navigate = useNavigate();

  const curDiaryItem = useDiary(params.id);

  if (!curDiaryItem) {
    return <div>데이터 로딩 중</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title} 기록`}
        leftChild={
          <Button
            text={"< 뒤로 가기"}
            onClick={() => navigate(-1)}
          />
        }
        rightChild={
          <Button
            text={"수정하기"}
            onClick={() => navigate(`/edit/${params.id}`)}
          />
        }
      />
      <Viewer
        emotionId={emotionId}
        content={content}
      />
    </div>
  );
};

export default Diary;
