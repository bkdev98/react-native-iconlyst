import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarBackLight = ({
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
      d="M8.256 9.604h8.496M16.143 3v2.576M8.872 3v2.576"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.318 4.422h-7.62c-2.644 0-4.294 1.472-4.294 4.178v8.146c0 2.748 1.65 4.254 4.294 4.254h7.613c2.651 0 4.293-1.48 4.293-4.186V8.6c.008-2.706-1.634-4.178-4.286-4.178"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.12 15.26h6.798M11.154 17.185l-2.065-1.924 2.064-1.925"
    />
  </Svg>
);
export default IconlystCalendarBackLight;