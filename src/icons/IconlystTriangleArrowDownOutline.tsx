import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTriangleArrowDownOutline = ({
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
      d="M4.35 5.626A.75.75 0 0 1 5 5.25h14a.75.75 0 0 1 .648 1.128l-7 12a.75.75 0 0 1-1.296 0l-7-12a.75.75 0 0 1-.002-.752M6.306 6.75 12 16.512l5.694-9.762z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTriangleArrowDownOutline;
