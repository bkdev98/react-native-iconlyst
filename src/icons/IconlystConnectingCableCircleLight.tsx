import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectingCableCircleLight = ({
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
      d="M7.865 16.27a2.514 2.514 0 0 1 0-3.555l.559-.559a.5.5 0 0 1 .705 0l2.85 2.85a.5.5 0 0 1 0 .705l-.559.559a2.514 2.514 0 0 1-3.555 0M15.979 8.156a2.514 2.514 0 0 0-3.555 0l-.559.559a.5.5 0 0 0 0 .705l2.85 2.85c.195.194.51.194.705 0l.559-.559a2.514 2.514 0 0 0 0-3.555M9.628 12.656l1.101-1.101m.753 2.956 1.101-1.102M7.863 16.273l-2.3 2.301M15.981 8.156l2.297-2.297"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.364 5.94A9 9 0 1 1 5.636 18.67 9 9 0 0 1 18.364 5.94"
    />
  </Svg>
);
export default IconlystConnectingCableCircleLight;
