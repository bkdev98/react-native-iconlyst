import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveUserBroken = ({
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
      d="M7.942 19.78c.175-1.359 1.384-2.867 4.384-2.867 3.033 0 4.233 1.517 4.4 2.892M21.4 6.267l-4.334.04"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.364 11.18q.037.406.037.82a9 9 0 0 1-9 9 9 9 0 0 1-8.306-5.527M3.4 12a9 9 0 0 1 10.122-8.93"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.4 9.402a2.561 2.561 0 1 1-2.222 1.287"
    />
  </Svg>
);
export default IconlystRemoveUserBroken;
