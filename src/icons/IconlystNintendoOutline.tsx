import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNintendoOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.836 4.92C4.16 5.647 3.75 6.711 3.75 8.03v7.95c0 1.32.408 2.38 1.082 3.104.668.718 1.656 1.166 2.945 1.166h1.955V3.75H7.777c-1.283 0-2.27.45-2.941 1.17M3.738 3.9C4.72 2.842 6.122 2.25 7.778 2.25h2.704a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H7.777c-1.658 0-3.06-.588-4.043-1.644-.977-1.049-1.484-2.498-1.484-4.127V8.03c0-1.629.51-3.08 1.488-4.131M12.768 3a.75.75 0 0 1 .75-.75h2.704c1.659 0 3.06.588 4.043 1.644.978 1.049 1.485 2.498 1.485 4.127v7.949c0 1.629-.51 3.08-1.488 4.131-.983 1.057-2.384 1.649-4.04 1.649h-2.704a.75.75 0 0 1-.75-.75zm1.5.75v16.5h1.954c1.284 0 2.271-.45 2.942-1.17.676-.727 1.086-1.791 1.086-3.11V8.02c0-1.32-.408-2.38-1.082-3.104-.669-.718-1.656-1.166-2.946-1.166z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.309 15.945a1.035 1.035 0 1 1 2.07.001 1.035 1.035 0 0 1-2.07 0M5.623 8.082a1.035 1.035 0 1 1 2.071 0 1.035 1.035 0 0 1-2.071 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNintendoOutline;
