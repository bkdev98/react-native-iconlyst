import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWifiPhoneOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M3.762 6.618A4.37 4.37 0 0 1 8.129 2.25h5.516a4.37 4.37 0 0 1 4.368 4.367v3.564a.75.75 0 0 1-1.5 0V6.619a2.87 2.87 0 0 0-2.868-2.868H8.129a2.87 2.87 0 0 0-2.867 2.868v10.764A2.87 2.87 0 0 0 8.13 20.25h1.915a.75.75 0 0 1 0 1.5H8.13a4.37 4.37 0 0 1-4.367-4.367z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.746 6.688a.75.75 0 0 1 .75-.75h2.784a.75.75 0 0 1 0 1.5H9.496a.75.75 0 0 1-.75-.75M19.52 16.632a5.55 5.55 0 0 0-6.926 0 .75.75 0 1 1-.938-1.17 7.05 7.05 0 0 1 8.803 0 .75.75 0 0 1-.938 1.17"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.579 19.045a2.354 2.354 0 0 0-3.033.003.75.75 0 0 1-.974-1.14 3.854 3.854 0 0 1 4.974-.009.75.75 0 1 1-.968 1.146M16.063 20.14a.75.75 0 0 1 .75.75v.014a.75.75 0 1 1-1.5 0v-.014a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWifiPhoneOutline;
