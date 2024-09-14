import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorLockBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.5 7.514v5.45c0 2.5-2.03 4.53-4.53 4.53H7.03c-2.5 0-4.53-2.03-4.53-4.53v-5.45c0-2.49 2.03-4.53 4.53-4.53h9.94c2.5 0 4.53 2.04 4.53 4.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.213 10.74c0-.281.23-.511.514-.511h2.547c.288 0 .513.225.513.51v1.43c0 .282-.23.51-.513.51h-2.547a.51.51 0 0 1-.514-.51zm1.018-2.17a.766.766 0 0 1 .759-.761c.182.022.4.076.547.219s.23.335.232.53v.17H11.23zm-.504 5.609h2.547c1.11 0 2.013-.901 2.013-2.01v-1.43c0-.744-.413-1.39-1.018-1.736V8.55a2.25 2.25 0 0 0-.684-1.597A2.26 2.26 0 0 0 12 6.309h-.027a2.26 2.26 0 0 0-2.242 2.25v.444a2 2 0 0 0-1.018 1.737v1.43c0 1.108.903 2.009 2.014 2.009M16.95 20.164h-1.56l-.43-2.67h-1.52l.43 2.67h-3.74l.44-2.67H9.05l-.44 2.67H7.06c-.42 0-.75.34-.75.75 0 .42.33.75.75.75h9.89a.749.749 0 1 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorLockBulk;
