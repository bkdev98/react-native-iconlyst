import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallWarningTwoTone = ({
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
      d="M11.793 12.744c3.765 3.765 4.884-.856 7.282 1.54 2.311 2.311 3.64 2.773.712 5.7-.368.295-2.698 3.843-10.888-4.346S4.252 5.117 4.546 4.75c2.936-2.935 3.391-1.6 5.703.71 2.396 2.398-2.221 3.52 1.544 7.284"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.861 9.069v-.06M16.856 3v3.386"
    />
  </Svg>
);
export default IconlystPhoneCallWarningTwoTone;
