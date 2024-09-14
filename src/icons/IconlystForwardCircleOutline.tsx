import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 12c0-5.384 4.365-9.75 9.75-9.75S22 6.616 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12m9.75-8.25a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.98 8.359a.75.75 0 0 1 1.04-.204l-.418.622.418-.622.007.005.016.01.06.042a25 25 0 0 1 .922.663c.526.395 1.202.936 1.6 1.402l.004.004a2.63 2.63 0 0 1-.002 3.438c-.419.495-1.094 1.035-1.618 1.426a24 24 0 0 1-.913.647l-.06.04-.016.011-.005.003-.001.001-.412-.627.412.627a.75.75 0 0 1-.824-1.253l.004-.003.013-.008.053-.036a20 20 0 0 0 .852-.604c.523-.39 1.074-.843 1.37-1.194l.004-.003c.37-.434.383-1.037-.002-1.496-.28-.326-.83-.777-1.36-1.177a26 26 0 0 0-.869-.624L13.2 9.41l-.013-.009-.003-.002M12.98 8.36a.75.75 0 0 0 .204 1.041Z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.284 8.56c.544-.31 1.195-.31 1.804-.067l.005.002a10.1 10.1 0 0 1 2.958 1.874l.005.004c.478.444.76 1.019.756 1.639-.003.618-.288 1.185-.759 1.616A9.9 9.9 0 0 1 10.1 15.5c-.577.244-1.218.247-1.761-.04-.554-.294-.917-.843-1.004-1.516l-.002-.014a18 18 0 0 1 0-3.851l.001-.017c.08-.634.402-1.192.95-1.503m.54 1.68a16.7 16.7 0 0 0 0 3.516c.031.236.135.335.217.378.093.05.257.077.477-.016l.006-.003a8.4 8.4 0 0 0 2.512-1.59l.004-.003c.21-.192.272-.377.272-.518 0-.138-.058-.328-.275-.53a8.6 8.6 0 0 0-2.506-1.589c-.273-.107-.434-.063-.506-.022-.07.04-.17.139-.201.377"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystForwardCircleOutline;
