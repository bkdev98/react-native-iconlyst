import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlideUpLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M18.823 11.94c.93 2.51.014 5.83-1.615 7.46-2.078 2.078-7.887 2.236-9.79-.13-1.206-1.5-2.144-3.321-2.735-4.953-.317-.876.148-1.82 1.017-2.153a1.785 1.785 0 0 1 2.109.654l1.168 1.694V5.148a1.632 1.632 0 0 1 3.264-.025l.065 4.223c2.285.218 5.593.1 6.517 2.594M18.201 8.005V3m0 5.005 1.217-1.217M18.2 8.005l-1.217-1.217M18.201 3l1.217 1.217M18.2 3l-1.217 1.217"
    />
  </Svg>
);
export default IconlystSlideUpLight;
