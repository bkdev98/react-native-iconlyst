import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystColorPaletteOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.935 4.25A2.75 2.75 0 0 0 4.185 7v11a2.75 2.75 0 1 0 5.5 0V7a2.75 2.75 0 0 0-2.75-2.75M2.685 7a4.25 4.25 0 1 1 8.5 0v11a4.25 4.25 0 1 1-8.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.686 14.502a.75.75 0 0 1 .75-.75h7a.75.75 0 1 1 0 1.5h-7a.75.75 0 0 1-.75-.75M2.686 9.615a.75.75 0 0 1 .75-.75h6.976a.75.75 0 0 1 0 1.5H3.436a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.58 6.346a4.251 4.251 0 0 1 6.01 6.01l-8.65 8.65a.75.75 0 0 1-1.06-1.06l8.65-8.65a2.75 2.75 0 0 0-3.89-3.89l-2.674 2.676a.75.75 0 1 1-1.06-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.636 14.5a.75.75 0 0 1 .75-.75h2.55a4.25 4.25 0 1 1 0 8.5h-11a.75.75 0 0 1 0-1.5h11a2.75 2.75 0 1 0 0-5.5h-2.55a.75.75 0 0 1-.75-.75M6.035 18.05a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystColorPaletteOutline;
