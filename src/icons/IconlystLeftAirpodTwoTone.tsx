import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftAirpodTwoTone = ({
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
      d="M16.229 6.44v1.367m-2.848.423c0 .448.132.894.403 1.252a4.39 4.39 0 0 0 3.485 1.72h1.12v6.254c0 .861.697 1.56 1.556 1.56.858 0 1.555-.698 1.555-1.56V7.32c0-2.37-2.292-4.426-4.656-4.317a4.1 4.1 0 0 0-3.06 1.629c-.27.358-.403.804-.403 1.254z"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.243 4.793A2.524 2.524 0 0 0 7.355 6.9M8.798 10.3c-2.926 0-5.298 2.379-5.298 5.315s2.372 5.318 5.298 5.318c2.925 0 5.298-2.381 5.298-5.318S11.723 10.3 8.798 10.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.883 13.357v3.842h2.316"
    />
  </Svg>
);
export default IconlystLeftAirpodTwoTone;
