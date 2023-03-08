import { StyledButton } from './styled';

export const Button = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick} type="button">
      Load more
    </StyledButton>
  );
};
