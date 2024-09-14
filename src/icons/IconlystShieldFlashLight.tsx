import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShieldFlashLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21.137s7.325-2.218 7.325-8.33c0-6.114.266-6.588-.322-7.18-.59-.594-6.041-2.49-7.002-2.49s-6.413 1.9-7.002 2.49c-.588.587-.321 1.065-.321 7.18 0 6.113 7.323 8.33 7.323 8.33"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.693 8.32-2.976 4.099a.442.442 0 0 0 .358.701h2.434v2.574c0 .428.548.606.8.26l2.976-4.099a.442.442 0 0 0-.358-.702h-2.434V8.58a.442.442 0 0 0-.8-.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShieldFlashLight;
