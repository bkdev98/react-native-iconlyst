import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPage1Bold = ({
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
      d="M3.924 4.068c.932-1 2.265-1.568 3.859-1.568h8.434c1.598 0 2.931.567 3.863 1.568.927.997 1.42 2.382 1.42 3.958v.716h-19v-.716c0-1.576.495-2.962 1.424-3.958M5.539 6.55a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.486 0a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5h-.056a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M2.5 10.242v5.73c0 1.577.492 2.963 1.42 3.96.932 1 2.265 1.567 3.863 1.567h8.433c1.598 0 2.932-.567 3.863-1.568.928-.997 1.42-2.382 1.42-3.958v-5.73z"
    />
  </Svg>
);
export default IconlystWebPage1Bold;
