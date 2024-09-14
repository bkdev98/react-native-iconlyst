import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardLockTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.5 11.46V8.166C21.5 5.724 19.98 4 17.535 4H7.465C5.028 4 3.5 5.724 3.5 8.166v6.587c0 2.442 1.521 4.168 3.965 4.168h2.942"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.46 20.568h-3.193a1.584 1.584 0 0 1-1.585-1.585V17.19c0-.875.709-1.585 1.585-1.585h3.193c.876 0 1.585.71 1.585 1.585v1.793c0 .875-.71 1.584-1.585 1.584"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.769 15.636v-1.179a1.906 1.906 0 0 0-3.812-.009v1.188"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.5 9.297h18"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCardLockTwoTone;
