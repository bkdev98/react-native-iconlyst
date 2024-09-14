import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarTimeBroken = ({
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
      d="M15.588 3v2.849M8.595 3v2.849M10.65 20.312H8.8c-2.542 0-4.128-1.449-4.128-4.093V8.386c0-1.616.612-2.775 1.684-3.421M19.876 10.88V8.386c.008-2.603-1.572-4.019-4.121-4.019M12.704 4.367h-4.11M13.063 17.096a3.905 3.905 0 1 0 1.41-3.004"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.18 18.11-1.235-.738v-1.587M16.075 9.52h-8.17"
    />
  </Svg>
);
export default IconlystCalendarTimeBroken;
