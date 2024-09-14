import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldErrorBulk = ({
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
      d="M19.355 5.137C18.651 4.431 13.025 2.5 12 2.5c-1.024 0-6.65 1.931-7.356 2.638-.56.561-.553.995-.509 3.397.017.974.042 2.3.042 4.135 0 6.407 7.601 8.785 7.678 8.809a.5.5 0 0 0 .291 0c.076-.024 7.678-2.402 7.678-8.809 0-1.831.024-3.155.041-4.128.044-2.408.052-2.842-.51-3.405"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.001 15.882a.75.75 0 0 0 .75-.75v-.101a.75.75 0 0 0-1.5 0v.1c0 .415.336.75.75.75M11.997 7.46a.75.75 0 0 0-.75.75V12a.75.75 0 0 0 1.5 0V8.21a.75.75 0 0 0-.75-.75"
    />
  </Svg>
);
export default IconlystShieldErrorBulk;
