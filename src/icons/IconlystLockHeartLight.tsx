import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLockHeartLight = ({
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
      d="M18.119 3.998c3.337 1.075 4.524 4.73 3.502 7.916-1.673 5.111-8.64 8.356-8.64 8.356s-7.074-3.303-8.65-8.356c-1.022-3.186.175-6.831 3.512-7.916a5.74 5.74 0 0 1 2.672-.18c.892.15 1.736.765 2.465 1.305.726-.545 1.572-1.162 2.465-1.314a5.7 5.7 0 0 1 2.674.189"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.382 10.857a1.405 1.405 0 1 0-2.81 0 1.405 1.405 0 0 0 2.81 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.977 14.547v-2.232"
    />
  </Svg>
);
export default IconlystLockHeartLight;
