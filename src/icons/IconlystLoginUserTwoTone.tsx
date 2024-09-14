import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginUserTwoTone = ({
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
      d="M17.098 10.035h4.666m-4.666 0L18.98 8.16m-1.882 1.875 1.882 1.873"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.054 19.877c-1.407 0-2.257-.913-2.318-2.185 0-2.59 2.802-3.482 7.024-3.512 4.23.04 7.04.933 7.025 3.512-.068 1.272-.914 2.185-2.318 2.185zM10.767 11.224a3.55 3.55 0 1 0 0-7.1 3.55 3.55 0 0 0 0 7.1Z"
    />
  </Svg>
);
export default IconlystLoginUserTwoTone;
