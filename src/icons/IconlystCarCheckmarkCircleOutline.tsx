import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarCheckmarkCircleOutline = ({
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
      fillRule="evenodd"
      d="M12.25 3.75A8.25 8.25 0 0 0 4 12a8.25 8.25 0 0 0 8.25 8.25.75.75 0 0 1 0 1.5A9.75 9.75 0 0 1 2.5 12a9.75 9.75 0 0 1 9.75-9.75A9.75 9.75 0 0 1 22 12a9.7 9.7 0 0 1-.463 2.978.75.75 0 0 1-1.429-.458A8.25 8.25 0 0 0 12.25 3.75M21.78 18.07a.75.75 0 0 1 0 1.06l-2.4 2.4a.75.75 0 0 1-1.06 0l-1.44-1.44a.75.75 0 0 1 1.06-1.06l.91.91 1.87-1.87a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.112 10.64a.75.75 0 0 1 .847-.636 30.5 30.5 0 0 0 8.572 0 .75.75 0 0 1 .21 1.485 32 32 0 0 1-8.992 0 .75.75 0 0 1-.637-.848"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.14 7.712c1.4-.22 2.825-.22 4.225 0h.003A1.85 1.85 0 0 1 15.8 8.91l.511 1.42.013.027.566.759c.328.448.505.989.506 1.544v2.555c0 .684-.555 1.239-1.239 1.239h-1.182a1.24 1.24 0 0 1-1.237-1.178h-2.98a1.24 1.24 0 0 1-1.237 1.178H8.344c-.685 0-1.24-.557-1.239-1.243l.008-2.542c0-.548.173-1.082.494-1.526l.586-.806.008-.014.508-1.413a1.85 1.85 0 0 1 1.424-1.196zm.237 1.481a.35.35 0 0 0-.253.215l-.003.007-.516 1.435q-.076.203-.207.378l-.576.794c-.136.187-.209.413-.209.645v.004l-.007 2.282h.655a1.24 1.24 0 0 1 1.238-1.178h3.499c.664 0 1.205.522 1.237 1.178h.66V12.66c0-.236-.075-.466-.213-.657l-.568-.761-.01-.015a1.6 1.6 0 0 1-.203-.387l-.515-1.431a.35.35 0 0 0-.256-.215 12 12 0 0 0-3.753 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarCheckmarkCircleOutline;
