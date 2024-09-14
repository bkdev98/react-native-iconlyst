import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRightDownLineOutline = ({
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
      d="M7.288 10.108a.75.75 0 0 1 1.06 0l7.076 7.075-.009-5.09a.75.75 0 1 1 1.5-.002l.012 6.861a.75.75 0 0 1-.22.578.75.75 0 0 1-.532.22l-6.904-.015a.75.75 0 0 1 .003-1.5l5.091.011-7.077-7.077a.75.75 0 0 1 0-1.06M5.338 5a.75.75 0 0 1 .75-.75h11.825a.75.75 0 0 1 0 1.5H6.088a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRightDownLineOutline;
