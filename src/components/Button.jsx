import styled from "styled-components";
const Button = ({ text, type, onClick }) => {
  return (
    <div>
      <GlobalButton
        onClick={onClick}
        type={type}
      >
        {text}
      </GlobalButton>
    </div>
  );
};

export default Button;

const GlobalButton = styled.button`
  background-color: rgb(236, 236, 236);
  cursor: pointer;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  white-space: nowrap; // 창의 사이즈가 작아져도 버튼 내의 content가 줄바꿈 되지 않음

  ${({ type }) => {
    if (type === "POSITIVE") {
      return `background-color : rgb(100,201,100); color:white;`;
    } else if (type === "NEGATIVE") {
      return `background-color:rgb(253,86,95); color:white`;
    }
  }}
`;
