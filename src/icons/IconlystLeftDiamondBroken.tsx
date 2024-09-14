import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftDiamondBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.955 19.94c-1.732 1.73-4.034 1.876-5.767.143L4.23 15.125c-1.728-1.729-1.588-4.036.143-5.767l4.672-4.673c1.732-1.73 4.033-1.876 5.766-.143l4.958 4.959c1.734 1.733 1.59 4.036-.142 5.767l-2.336 2.336"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.225 9.52 8.42 12.314l2.804 2.791M8.42 12.313h7.162"
    />
  </Svg>
);
export default IconlystLeftDiamondBroken;
