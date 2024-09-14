import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarLightsharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M4.01 10.134h16.487M16.358 13.746h.008M12.254 13.746h.008M8.14 13.746h.009M16.358 17.341h.008M12.254 17.341h.008M8.14 17.341h.009M15.99 3.285v3.044M8.518 3.285v3.044"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M20.575 4.745H3.925v17.04h16.65z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarLightsharp;
