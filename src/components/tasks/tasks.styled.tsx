import styled from "@emotion/styled";
import { Alarm } from "@mui/icons-material";
import { Button, css } from "@mui/material";
import { fadeIn, ring } from "../../styles";
import { getFontColor } from "../../utils";

interface TaskComponentProps {
  backgroundColor: string;
  active: boolean;
  glow?: boolean;
  blur?: boolean;
}

export const TaskContainer = styled.div<TaskComponentProps>`
  display: flex;
  align-items: center;
  margin-top: 14px;
  transition: 0.3s all !important;
  background-color: ${({ backgroundColor, active }) => `${backgroundColor}${active ? "cc" : ""}`};
  opacity: ${({ active }) => (active ? 0.8 : 1)};
  color: ${({ backgroundColor }) => getFontColor(backgroundColor)};
  border-left: ${({ active }) => (active ? "8px solid #00ff1ee3" : "1px solid transparent")};
  box-shadow: ${(props) =>
    props.glow && !props.blur ? `0 0 128px -20px ${props.backgroundColor}` : "none"};
  padding: 16px 16px 16px 20px;
  border-radius: 28px;
  animation: ${fadeIn} 0.5s ease-in;
  filter: ${({ blur }) => (blur ? "blur(2px) opacity(75%)" : "none")};
  text-shadow: ${({ backgroundColor, glow, active }) =>
    glow && !active ? `0 0 4px ${getFontColor(backgroundColor)}78` : "none"};
  /* If the theme color and task color are the same, it changes the selection color to be different. */
  *::selection {
    background-color: ${({ theme, backgroundColor }) =>
      theme.primary === backgroundColor ? "#ffffff" : theme.primary} !important;
    color: ${({ theme, backgroundColor }) =>
      theme.primary === backgroundColor ? "#000000" : getFontColor(theme.primary)} !important;
  }
  @media (max-width: 768px) {
    padding: 14px 14px 14px 18px;
    margin-top: 12px;
  }
`;

TaskContainer.defaultProps = {
  className: "TaskContainer",
};

export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const TaskHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const TaskName = styled.h3`
  font-size: 25px;
  margin: 0;
  word-break: break-word;
  white-space: pre-line;
`;

export const TaskDate = styled.p`
  margin: 0 6px;
  text-align: right;
  margin-left: auto;
  font-size: 25px;
  font-style: italic;
  font-weight: 300;
  backdrop-filter: none !important;
`;

export const TaskDescription = styled.p`
  margin: 0;
  font-size: 18px;
  word-break: break-word;
`;

export const ShowMoreBtn = styled(Button)<{ clr: string }>`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bolder;
  transition: 0.3s color;
  color: ${({ clr }) => getFontColor(clr)};
  text-shadow: ${({ clr }) => `0 0 8px ${getFontColor(clr) + 45}`};
  text-transform: capitalize;
  border-radius: 6px;
  padding: 0 4px;
  margin: 0 4px;
`;

export const NoTasks = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  opacity: 0.9;
  font-size: 18px;
`;

export const TasksContainer = styled.main`
  display: flex;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  flex-direction: column;
  gap: 6px;
`;

export const DescriptionLink = styled(Button)<{ clr: string }>`
  margin: 0;
  color: ${({ clr }) => getFontColor(clr)};
  padding: 0 4px;
  display: inline-block;
  background: ${({ clr }) => getFontColor(clr)}28;
  backdrop-filter: none !important;
  text-transform: none !important;
  min-width: unset !important;
  user-select: auto !important;
  border-radius: 6px;
  &:hover {
    background: ${({ clr }) => getFontColor(clr)}19;
  }
  & div {
    word-break: break-all;
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export const YouTubeThumbnail = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 6px;
  & img {
    width: 300px;
    height: 160px;
    border-radius: 12px;
    margin-bottom: 6px;
    object-fit: cover;
    object-position: 100%;
    opacity: 0.9;
  }
  @media (max-width: 768px) {
    & img {
      width: 150px;
      height: 80px;
    }
    justify-content: left;
  }
`;

const ringAnimation = "2s 0.5s ease-in-out infinite";

export const RingAlarm = styled(Alarm)<{ animate?: boolean }>`
  color: red;
  ${({ animate }) =>
    animate &&
    css`
      -webkit-animation: ${ring} ${ringAnimation};
      -moz-animation: ${ring} ${ringAnimation};
      animation: ${ring} ${ringAnimation};
    `}
`;
