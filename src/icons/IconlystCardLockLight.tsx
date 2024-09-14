import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardLockLight = ({
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
      d="M21 11.46V8.166C21 5.724 19.48 4 17.035 4H6.965C4.528 4 3 5.724 3 8.166v6.587c0 2.442 1.521 4.168 3.965 4.168h2.942"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.96 20.568h-3.193a1.584 1.584 0 0 1-1.585-1.585V17.19c0-.875.709-1.585 1.585-1.585h3.193c.876 0 1.585.71 1.585 1.585v1.793c0 .875-.71 1.584-1.585 1.584"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.269 15.636v-1.179a1.906 1.906 0 0 0-3.812-.009v1.188M3 9.297h18"
    />
  </Svg>
);
export default IconlystCardLockLight;
