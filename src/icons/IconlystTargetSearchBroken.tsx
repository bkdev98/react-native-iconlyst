import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetSearchBroken = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M8.75 11.38a2.85 2.85 0 1 0 2.85-2.85M2.75 9.54a8.99 8.99 0 0 1 6.79-6.79M13.5 2.75c3.37.76 6.03 3.41 6.79 6.79M9.54 20.29a9 9 0 0 1-6.79-6.79M20.29 13.5a9.02 9.02 0 0 1-6.79 6.79M17.99 17.97l3.66 3.65"
    />
  </Svg>
);
export default IconlystTargetSearchBroken;
