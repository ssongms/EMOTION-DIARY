import styled from "styled-components";
const Header = ({ leftChild, rightChild, title }) => {
  return (
    <GlobalHeader>
      <Header_left>{leftChild}</Header_left>
      <Header_center>{title}</Header_center>
      <Header_right>{rightChild}</Header_right>
    </GlobalHeader>
  );
};

export default Header;

const GlobalHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px 0px;
  border-bottom: 1px solid rgb(226, 226, 226);
`;

const Header_left = styled.div`
  display: flex;
  width: 25%;
  justify-content: flex-start;
`;

const Header_center = styled.div`
  display: flex;
  width: 50%;
  font-size: 25px;
  justify-content: center;
`;

const Header_right = styled.div`
  display: flex;
  width: 25%;
  justify-content: flex-end;
`;
