import styled from 'styled-components';
import Map from '../../components/Map';
import Search from '../../components/Search';

const MainPage = () => {
  return (
    <StMain>
      <Map />
      <Search />
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
