import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftDownLineOutline = ({
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
      d="M16.71 10.108a.75.75 0 0 1 0 1.061l-7.077 7.077 5.092-.01a.75.75 0 0 1 .003 1.5l-6.904.014a.75.75 0 0 1-.534-.221.75.75 0 0 1-.218-.587l.012-6.85a.75.75 0 0 1 1.5.002l-.009 5.089 7.075-7.075a.75.75 0 0 1 1.06 0M5.338 5a.75.75 0 0 1 .75-.75h11.825a.75.75 0 0 1 0 1.5H6.088a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftDownLineOutline;
