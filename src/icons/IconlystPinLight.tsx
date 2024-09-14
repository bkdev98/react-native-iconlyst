import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinLight = ({
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
      d="M18.26 5.89a8.853 8.853 0 1 1-12.52 0"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.398 11.414a4.44 4.44 0 0 1-1.244 3.887 4.464 4.464 0 0 1-6.309 0 4.44 4.44 0 0 1-1.243-3.887"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 10.797c-.522 0-3.26-2.217-3.26-4.537a3.26 3.26 0 0 1 6.52 0c0 2.32-2.739 4.537-3.26 4.537"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6.257V6.3m.18-.035a.18.18 0 1 1-.36 0 .18.18 0 0 1 .36 0"
    />
  </Svg>
);
export default IconlystPinLight;
