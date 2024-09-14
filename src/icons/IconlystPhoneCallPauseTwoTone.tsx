import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallPauseTwoTone = ({
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
      d="M11.79 12.714c3.779 3.778 4.902-.86 7.309 1.544 2.32 2.32 3.653 2.784.715 5.723-.37.295-2.708 3.856-10.929-4.363C.665 7.4 4.221 5.058 4.517 4.69c2.946-2.946 3.403-1.605 5.723.713 2.405 2.406-2.229 3.533 1.55 7.31"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.275 8.262V4.037m3.372 4.225V4.037"
    />
  </Svg>
);
export default IconlystPhoneCallPauseTwoTone;
