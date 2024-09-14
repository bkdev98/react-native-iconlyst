import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendLove1Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M13.51 17.617h-1.377a.75.75 0 1 1 0-1.5h1.377a.953.953 0 0 0 1.026-.939.97.97 0 0 0-.777-.94 11.6 11.6 0 0 0-3.247-.458 7 7 0 0 0-3.788 1.63l-.485.328a.75.75 0 0 1-.834-1.246l.474-.322a8.34 8.34 0 0 1 4.6-1.89c1.233 0 2.46.168 3.648.5a2.448 2.448 0 0 1-.614 4.835zM13.95 10.854a.8.8 0 0 1-.318-.07c-.137-.064-3.347-1.59-4.114-4.045a3.356 3.356 0 0 1 1.992-4.337 3.24 3.24 0 0 1 1.508-.1c.332.064.648.194.93.382.283-.19.6-.321.935-.386a3.16 3.16 0 0 1 1.5.1 3.35 3.35 0 0 1 1.992 4.344c-.81 2.476-3.973 3.973-4.108 4.036a.8.8 0 0 1-.318.076m-1.474-7.1q-.261 0-.512.078a1.87 1.87 0 0 0-1.016 2.454c.418 1.339 2.087 2.479 3 2.976.732-.4 2.52-1.507 3-2.977a1.86 1.86 0 0 0-1.02-2.456 1.64 1.64 0 0 0-.792-.054 2.2 2.2 0 0 0-.734.424.75.75 0 0 1-.9 0 2.2 2.2 0 0 0-.736-.422 1.7 1.7 0 0 0-.285-.024z"
    />
    <Path
      fill={props.color}
      d="M12.987 21.563a22.5 22.5 0 0 1-4.35-.575 13.7 13.7 0 0 0-2.815-.205.75.75 0 0 1 0-1.5 15 15 0 0 1 3.041.22c2.553.506 4.7.931 7 .037a11.25 11.25 0 0 0 3.887-2.939l.187-.189a.855.855 0 0 0 0-1.2.835.835 0 0 0-1.1-.079c-.24.182-.485.382-.732.586a6.52 6.52 0 0 1-3.849 1.916c-.275 0-.55 0-.825-.015a7 7 0 0 0-1.192.023.75.75 0 0 1-.217-1.484q.732-.086 1.467-.038c.244.01.487.02.732.014a5.35 5.35 0 0 0 2.932-1.575c.264-.217.524-.43.782-.625a2.347 2.347 0 0 1 3.066 3.54l-.186.187a12.6 12.6 0 0 1-4.415 3.282 9.2 9.2 0 0 1-3.413.62"
    />
    <Path
      fill={props.color}
      d="M4.544 21.75H3.512a.75.75 0 0 1 0-1.5h1.032q.527-.002.528-.594v-4.609c0-.393-.177-.594-.527-.594H3.512a.75.75 0 0 1 0-1.5H4.55a1.995 1.995 0 0 1 2.027 2.094v4.61a1.994 1.994 0 0 1-2.033 2.092"
    />
  </Svg>
);
export default IconlystSendLove1Outline;
