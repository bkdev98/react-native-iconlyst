import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFlashBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m14.44 11.629-1.792 3.29a.75.75 0 1 1-1.317-.717l1.188-2.181h-2.301a.75.75 0 0 1-.659-1.108l1.79-3.3a.749.749 0 1 1 1.318.715l-1.19 2.193h2.304a.75.75 0 0 1 .659 1.108m4.916-6.492C18.65 4.431 13.025 2.5 12 2.5S5.349 4.431 4.644 5.138c-.56.561-.553.995-.51 3.397.019.974.043 2.3.043 4.135 0 6.407 7.6 8.785 7.678 8.809a.5.5 0 0 0 .29 0c.077-.024 7.679-2.402 7.679-8.809 0-1.831.024-3.155.042-4.128.043-2.408.05-2.842-.51-3.405"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldFlashBold;
