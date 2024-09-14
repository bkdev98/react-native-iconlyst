import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSearchBroken = ({
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
      d="M18.405 18.715a2.368 2.368 0 1 1-3.349-3.35 2.368 2.368 0 0 1 3.35 3.35m0 0 1.283 1.283M11.345 14.836c-3.365 0-6.233.508-6.233 2.544s2.853 2.561 6.233 2.561M7.498 7.93a3.93 3.93 0 1 0 1.014-2.635"
    />
  </Svg>
);
export default IconlystUserSearchBroken;
