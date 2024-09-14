import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginUserLight = ({
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
      d="M8.576 10.035H3.91m4.666 0L6.694 8.16m1.882 1.875-1.882 1.873"
    />
    <Path
      stroke={props.color}
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M10.257 19.877c-1.407 0-2.257-.913-2.318-2.185 0-2.59 2.803-3.482 7.025-3.512 4.23.04 7.039.933 7.024 3.512-.068 1.272-.913 2.185-2.318 2.185zM14.97 11.224a3.55 3.55 0 1 0 0-7.099 3.55 3.55 0 0 0 0 7.1Z"
    />
  </Svg>
);
export default IconlystLoginUserLight;
