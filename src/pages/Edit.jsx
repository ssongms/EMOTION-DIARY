import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Button from "../components/Button";
import { DiaryDispatchContext } from "../App";
import { DiaryStateContext } from "../App";
import Editor from "../components/Editor";
import Header from "../components/Header";

const Edit = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState();

  useEffect(() => {
    const currentDiaryItem = data.find((item) => String(item.id) === String(params.id));
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다");
      navigate("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [params.id, data]);

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
