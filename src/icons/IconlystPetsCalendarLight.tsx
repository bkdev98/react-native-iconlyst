import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPetsCalendarLight = ({
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
      d="M8.194 4.723h7.62c2.652 0 4.294 1.472 4.286 4.179v8.213c0 2.706-1.642 4.187-4.293 4.187H8.194c-2.643 0-4.294-1.507-4.294-4.256V8.902c0-2.707 1.65-4.18 4.294-4.18M15.64 3.3v2.577M8.37 3.301v2.576"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.998 9.514v-.052m-.006-.153a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M15.263 11.172v-.052m-.007-.152a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45M8.748 11.172v-.052m-.006-.152a.225.225 0 1 0 .003.45.225.225 0 0 0-.003-.45"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.03 16.31c1.368 0 3.102 1.185 3.077-.639-.01-1.368-1.434-2.652-3.077-2.653-1.652 0-3.293 1.395-3.065 2.817.252 1.65 1.853.475 3.065.475Z"
    />
  </Svg>
);
export default IconlystPetsCalendarLight;
