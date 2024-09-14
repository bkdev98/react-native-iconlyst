import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftAirpodBroken = ({
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
      d="M21 12.96v4.496c0 .861-.697 1.56-1.555 1.56a1.56 1.56 0 0 1-1.555-1.56V11.2h-1.121a4.39 4.39 0 0 1-3.485-1.719 2.07 2.07 0 0 1-.403-1.252V5.887c0-.45.134-.896.404-1.254a4.1 4.1 0 0 1 3.059-1.629C18.708 2.895 21 4.95 21 7.321v2.534M15.729 6.44v1.367M9.742 4.793A2.524 2.524 0 0 0 6.855 6.9M3 15.615c0 2.937 2.372 5.318 5.298 5.318 2.925 0 5.298-2.381 5.298-5.318S11.223 10.3 8.298 10.3a5.27 5.27 0 0 0-3.61 1.425"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.383 13.357v3.842h2.316"
    />
  </Svg>
);
export default IconlystLeftAirpodBroken;
