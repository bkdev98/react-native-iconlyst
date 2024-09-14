import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartLike3Light = ({
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
      strokeWidth={1.5}
      d="M17.142 3.998c3.337 1.075 4.525 4.73 3.503 7.916-1.674 5.111-8.641 8.356-8.641 8.356s-7.074-3.303-8.65-8.356c-1.022-3.186.175-6.831 3.512-7.916a5.74 5.74 0 0 1 2.672-.18c.892.15 1.737.765 2.466 1.305.726-.545 1.571-1.162 2.464-1.314a5.7 5.7 0 0 1 2.674.189"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.018 7.281a2.63 2.63 0 0 1 1.816 2.295"
    />
  </Svg>
);
export default IconlystHeartLike3Light;
