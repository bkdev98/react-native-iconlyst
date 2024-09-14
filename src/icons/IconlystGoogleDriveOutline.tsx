import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleDriveOutline = ({
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
      d="M17.23 21.105H7.275a2.51 2.51 0 0 1-2.143-1.217l-2.28-3.825a2.49 2.49 0 0 1 0-2.553l5.592-9.4a2.5 2.5 0 0 1 2.143-1.22h3.326a2.51 2.51 0 0 1 2.142 1.219l5.593 9.4a2.5 2.5 0 0 1 0 2.549l-2.275 3.825a2.51 2.51 0 0 1-2.143 1.222M10.588 4.397a1 1 0 0 0-.854.486l-5.593 9.4a.99.99 0 0 0 0 1.018l2.28 3.824a1 1 0 0 0 .854.485h9.955a1 1 0 0 0 .856-.487L20.36 15.3a1 1 0 0 0 0-1.017l-5.593-9.4a1 1 0 0 0-.854-.486z"
    />
    <Path
      fill={props.color}
      d="M21.25 15.453h-18a.75.75 0 1 1 0-1.5h18a.75.75 0 1 1 0 1.5"
    />
    <Path
      fill={props.color}
      d="M18.042 20.848a.75.75 0 0 1-.667-.407l-8.36-16.2a.75.75 0 0 1 1.332-.687l8.36 16.195a.75.75 0 0 1-.665 1.094z"
    />
    <Path
      fill={props.color}
      d="M6.466 20.85a.75.75 0 0 1-.666-1.095l8.354-16.2a.75.75 0 0 1 1.334.687l-8.354 16.2a.75.75 0 0 1-.668.407"
    />
  </Svg>
);
export default IconlystGoogleDriveOutline;
