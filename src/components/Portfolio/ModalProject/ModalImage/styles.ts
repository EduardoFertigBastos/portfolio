import { AiOutlineCloseCircle } from "react-icons/ai";
import styled from 'styled-components';

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
  color: #e53935;
  margin-left: -3rem;
  margin-top: 10px;
  font-size: 2.2rem;
  z-index: 999;
  cursor: pointer;
`;

export const Body = styled.div`
  justify-content: center;
  display: flex;

  img {
    max-height: 80%;
    vertical-align:middle;
  }
`;