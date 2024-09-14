import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLinkHiddenTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.068 10.719-1.026 1.026c-2.053 2.053-2.059 5.417 0 7.476a5.31 5.31 0 0 0 5.444 1.263M17.931 14.81l1.027-1.026c2.052-2.053 2.058-5.418 0-7.476a5.3 5.3 0 0 0-5.444-1.263"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.481 20.137 9.287 5.773"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLinkHiddenTwoTone;
