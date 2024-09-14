import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockDash4Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M5.505 7.628c.307 0 .61-.14.806-.407a8 8 0 0 1 1.292-1.379 1 1 0 0 0-1.29-1.527A10 10 0 0 0 4.7 6.035a.999.999 0 0 0 .804 1.593M17.674 18.301a7.9 7.9 0 0 1-4.34 1.671 8 8 0 0 1-2.347-.169 1 1 0 0 0-.438 1.952 10 10 0 0 0 2.933.212 9.9 9.9 0 0 0 5.423-2.09 1 1 0 1 0-1.231-1.576M5.377 15.176a1.001 1.001 0 0 0-1.831.806 10.03 10.03 0 0 0 3.465 4.2 1 1 0 0 0 1.39-.253 1 1 0 0 0-.251-1.392 8 8 0 0 1-2.773-3.36M3.831 13.576a1 1 0 0 0 .923-1.071 8 8 0 0 1 .266-2.692 1 1 0 1 0-1.929-.528 10 10 0 0 0-.33 3.368 1 1 0 0 0 1.07.923M12.331 2.01a1 1 0 0 0-.961 1.038c.022.552.5.983 1.037.96 4.408-.183 8.142 3.282 8.311 7.69a7.9 7.9 0 0 1-1.195 4.493 1.001 1.001 0 0 0 1.699 1.057 9.9 9.9 0 0 0 1.494-5.627c-.211-5.51-4.858-9.803-10.385-9.611" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.67 7.629a1 1 0 0 0-1 1v3.61a1 1 0 0 0 .486.859l2.798 1.67a1.002 1.002 0 0 0 1.372-.346 1 1 0 0 0-.346-1.372l-2.31-1.38V8.63a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClockDash4Bulk;
