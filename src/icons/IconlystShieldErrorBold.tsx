import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldErrorBold = ({
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
      d="M12.75 15.131a.75.75 0 0 1-1.5 0v-.101a.75.75 0 0 1 1.5 0zM11.248 8.21a.75.75 0 0 1 1.5 0V12a.75.75 0 0 1-1.5 0zm8.108-3.073C18.65 4.431 13.024 2.5 12 2.5S5.349 4.431 4.644 5.138c-.561.561-.553.995-.51 3.397.018.974.043 2.3.043 4.135 0 6.407 7.6 8.785 7.678 8.809a.5.5 0 0 0 .29 0c.077-.024 7.679-2.402 7.679-8.809 0-1.831.024-3.155.04-4.128.045-2.408.053-2.842-.51-3.405"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldErrorBold;
