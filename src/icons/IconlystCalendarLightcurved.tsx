import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarLightcurved = ({
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
      d="M2.75 12.776c0-6.956 2.319-9.274 9.274-9.274 6.956 0 9.275 2.318 9.275 9.274s-2.32 9.274-9.275 9.274-9.274-2.318-9.274-9.274"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.025 9.324h18.008M16.429 13.261h.009M12.03 13.261h.008M7.621 13.261h.01M16.429 17.113h.009M12.03 17.113h.008M7.621 17.113h.01M16.033 2.05v3.262M8.025 2.05v3.262"
    />
  </Svg>
);
export default IconlystCalendarLightcurved;
