import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareCloudBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 21H7.782C4.834 21 3 18.919 3 15.974V8.026C3 5.081 4.843 3 7.782 3h8.435C19.165 3 21 5.081 21 8.026v7.948C21 18.919 19.165 21 16.216 21h-.251"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.23 15.714c-.257 0-.598-.054-.94-.192a2.34 2.34 0 0 1-1.376-2.133c0-1.467 1.036-2.328 2.319-2.34 0-.922.724-2.768 2.767-2.768s2.767 1.846 2.767 2.768c1.282.012 2.319.873 2.319 2.34 0 .949-.563 1.768-1.375 2.136a2.6 2.6 0 0 1-.946.189h-2.767"
    />
  </Svg>
);
export default IconlystSquareCloudBroken;
