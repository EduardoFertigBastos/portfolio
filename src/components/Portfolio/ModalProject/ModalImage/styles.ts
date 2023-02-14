import { AiOutlineCloseCircle } from "react-icons/ai";
import styled, { css } from 'styled-components';

export const CloseButton = styled.div`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  margin-top: 20px;
  text-align: center;
`;

export const Icon = styled(AiOutlineCloseCircle)`
  color: var(--first-color);
  font-size: 2.2rem;
`;

export const Body = styled.div`
  justify-content: center;
  display: flex;
  img {
    vertical-align:middle;
  }
`;