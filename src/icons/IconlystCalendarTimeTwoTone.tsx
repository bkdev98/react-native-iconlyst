import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarTimeTwoTone = ({
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
      d="M15.588 3v2.849M8.595 3v2.849M19.877 10.88V8.384c.007-2.603-1.573-4.019-4.122-4.019H8.426c-2.542 0-4.13 1.416-4.13 4.02v7.832c0 2.644 1.588 4.093 4.13 4.093h1.849"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.872 17.096a3.905 3.905 0 1 1-7.81-.001 3.905 3.905 0 0 1 7.81 0"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.18 18.11-1.235-.738v-1.587"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.173 9.636h-8.17"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCalendarTimeTwoTone;
