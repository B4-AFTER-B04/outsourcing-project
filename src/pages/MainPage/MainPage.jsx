import styled from 'styled-components';
import Map from '../../components/Map';

const MainPage = () => {
  return (
    <StMain>
      <Map />
    </StMain>
  );
};

const StMain = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 80px;
  box-sizing: border-box;
`;

export default MainPage;
