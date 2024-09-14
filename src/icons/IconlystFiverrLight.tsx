import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFiverrLight = ({
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
      strokeWidth={1.5}
      d="M14.78 6.15a.45.45 0 0 0 .45-.45V3.45a.45.45 0 0 0-.45-.45h-2.91C9.42 3 7.282 5.258 7.425 8.85H5.464a.45.45 0 0 0-.45.45v2.25c0 .248.201.45.45.45h2.25v8.55c0 .248.201.45.45.45h2.7a.45.45 0 0 0 .45-.45V12h4.077v8.55c0 .248.202.45.45.45h2.696a.45.45 0 0 0 .45-.45V9.3a.45.45 0 0 0-.45-.45h-7.223V7.706c0-.656.45-1.556 1.617-1.556z"
    />
  </Svg>
);
export default IconlystFiverrLight;
