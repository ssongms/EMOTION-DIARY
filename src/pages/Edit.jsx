import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/Button";
import { DiaryDispatchContext } from "../App";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useContext } from "react";
import useDiary from "../hooks/useDiary";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);

  const curDiaryItem = useDiary(params.id);

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제할까요? 다시 복구할 수 없습니다!")) {
      //확인 ->일기 삭제
      onDelete(params.id);
      navigate("/", { replace: true });
    }
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 수정하시겠습니까?")) {
      onUpdate(params.id, input.createdDate.getTime(), input.emotionId, input.content);
      navigate("/", { replace: true });
    }
  };

  return (
    <div>
      <Header
        title={"일기 수정하기"}
        leftChild={
          <Button
            text={"< 뒤로 가기"}
            onClick={() => navigate(-1)}
          />
        }
        rightChild={
          <Button
            text={"삭제하기"}
            type={"NEGATIVE"}
            onClick={onClickDelete}
          />
        }
      />
      <Editor
        initData={curDiaryItem}
        onSubmit={onSubmit}
      />
    </div>
  );
};

export default Edit;
