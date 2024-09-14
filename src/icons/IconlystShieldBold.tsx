import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldBold = ({
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
      d="M19.356 5.136C18.65 4.431 13.025 2.5 12 2.5S5.349 4.431 4.644 5.137c-.56.562-.553.996-.51 3.397.019.974.043 2.3.043 4.136 0 6.407 7.6 8.785 7.678 8.809a.5.5 0 0 0 .29 0c.077-.024 7.679-2.402 7.679-8.809 0-1.831.024-3.155.042-4.129.043-2.407.05-2.841-.51-3.405"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldBold;
