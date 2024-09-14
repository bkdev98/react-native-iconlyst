import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftSideBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.25 12v3.974C3.25 18.919 5.085 21 8.033 21h8.435c2.94 0 4.782-2.081 4.782-5.026V8.026C21.25 5.081 19.416 3 16.468 3H8.034C5.085 3 3.25 5.081 3.25 8.026v.353M8.792 3v18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.899 9.396 13.095 12l2.804 2.604"
    />
  </Svg>
);
export default IconlystLeftSideBroken;
