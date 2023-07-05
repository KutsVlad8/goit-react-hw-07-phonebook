import { RotatingLines } from 'react-loader-spinner';
import { LoaderContainer } from './Loader.styled';

export const Loader = () => (
  <LoaderContainer>
    <RotatingLines strokeColor="#1f76c1" />
  </LoaderContainer>
);
