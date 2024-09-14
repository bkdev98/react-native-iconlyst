import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLoginUserBroken = ({
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
      d="M7.826 10.035H3.16m4.666 0L5.944 8.16m1.882 1.875-1.882 1.873"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M12.868 19.877H9.514c-1.408 0-2.258-.913-2.318-2.185 0-2.59 2.802-3.482 7.024-3.512 4.23.04 7.04.933 7.024 3.512-.068 1.272-.913 2.185-2.318 2.185h-2.353M10.676 7.675a3.55 3.55 0 1 0 1.226-2.683"
    />
  </Svg>
);
export default IconlystLoginUserBroken;
