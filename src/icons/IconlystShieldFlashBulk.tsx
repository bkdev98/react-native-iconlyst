import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFlashBulk = ({
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
      d="M19.356 5.137C18.65 4.431 13.025 2.5 12 2.5S5.349 4.431 4.644 5.138c-.56.561-.553.995-.51 3.397.019.974.043 2.3.043 4.135 0 6.407 7.6 8.785 7.678 8.809a.5.5 0 0 0 .29 0c.077-.024 7.679-2.402 7.679-8.809 0-1.831.024-3.155.042-4.128.043-2.408.05-2.842-.51-3.405"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m12.648 14.92 1.792-3.29a.75.75 0 0 0-.66-1.107h-2.302l1.189-2.193a.749.749 0 1 0-1.318-.715l-1.79 3.3a.75.75 0 0 0 .659 1.108h2.3l-1.187 2.18a.749.749 0 1 0 1.317.718"
    />
  </Svg>
);
export default IconlystShieldFlashBulk;
