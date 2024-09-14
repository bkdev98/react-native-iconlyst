import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextSearchBroken = ({
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
      d="M3.25 5.57h6.33m0 0h6.45m-6.45 0v3.215M9.58 12v6.43M19.755 16.588l1.495 1.492m-3.516-6.639a2.97 2.97 0 1 1 0 5.942 2.97 2.97 0 0 1 0-5.942"
    />
  </Svg>
);
export default IconlystTextSearchBroken;
