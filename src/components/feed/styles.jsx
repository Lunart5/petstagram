import styled from "styled-components";

export const Container = styled.div`
  //background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 32px;
  font-family: Roboto;
`;
export const Card = styled.div`
  background: #fcfdfd;
  border: 0.5px solid #20c5b7;
  border-radius: 16px;
  box-shadow: 0px 16px 32px rgba(183, 239, 180, 0.5);
  margin: 16px 0px;
  padding: 16px;
`;
export const PostContainer = styled.div`
  padding: 16px;
`;

export const PostImg = styled.img`
  width: 100%;
  height: auto;
  margin-top: 16px;
  border-radius: 4px;
`;
export const Modal = styled.div`
  background: #000000a3;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  border-radius: 8px;
  padding: 16px;
`;
export const CloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background: none;
    border: none;
    outline: none;
  }
`;

export const OwnerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  span {
    margin-bottom: 16px;
  }
  h5 {
    margin: 0px;
  }
`;
export const LoadingDiv = styled.div`
  text-align: center;
  color: #44b641;
  -webkit-animation: heartbeat 1.5s ease-in-out infinite both;
  animation: heartbeat 1.5s ease-in-out infinite both;

  @-webkit-keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes heartbeat {
    from {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-transform-origin: center center;
      transform-origin: center center;
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    10% {
      -webkit-transform: scale(0.91);
      transform: scale(0.91);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    17% {
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    33% {
      -webkit-transform: scale(0.87);
      transform: scale(0.87);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    45% {
      -webkit-transform: scale(1);
      transform: scale(1);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
`;

export const Content = styled.div`
  max-width: 600px;
  width: 100%;

  border: 1px solid #9da6a2;
  border-radius: 8px;
  padding: 32px;
`;
export const Title = styled.h1`
  text-align: center;
`;

export const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  .name {
    font-weight: bold;
  }
  .description {
    font-size: 12px;
    margin-top: 6px;
  }
`;
export const Tags = styled.label`
  color: #20c5b7;
`;
export const CommentsTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
  font-size: 18px;
  color: #20c5b7;
  font-weight: bold;
`;
