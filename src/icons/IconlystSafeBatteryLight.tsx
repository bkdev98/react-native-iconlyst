import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSafeBatteryLight = ({
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
      d="M17.816 10.27v-.704c0-2.539-1.453-4.124-4.104-4.124h-3.35c-2.61 0-4.03 1.585-4.03 4.124v7.319c0 2.546 1.42 4.123 4.03 4.115h1.09"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.01 5.594v-.8c0-1.3-.743-1.794-2.1-1.794h-1.708c-1.333 0-2.06.493-2.06 1.794v.792"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.483 18.674c1.662-1.382 1.514-2.993.958-4.072-.572-1.11-1.687-1.885-2.854-2.262-1.787-.576-3.453-.561-3.804-.522-.102.337-.42 1.971-.18 3.834.157 1.217.716 2.454 1.702 3.219.96.744 2.516 1.184 4.178-.197"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.022 16.922s.86 2.178 2.886 3.451"
    />
  </Svg>
);
export default IconlystSafeBatteryLight;
