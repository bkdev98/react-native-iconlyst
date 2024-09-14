import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDoneBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M16.419 11.797h-3.987a.75.75 0 0 1 0-1.5h3.987a.75.75 0 0 1 0 1.5m0 4.848h-3.987a.75.75 0 0 1 0-1.5h3.987a.75.75 0 0 1 0 1.5m-6.062-6.447-1.483 1.483a.74.74 0 0 1-.53.22.74.74 0 0 1-.53-.22l-.762-.761a.75.75 0 0 1 1.06-1.061l.232.231.953-.952a.75.75 0 1 1 1.06 1.06m0 4.851-1.483 1.483a.74.74 0 0 1-.53.22.74.74 0 0 1-.53-.22l-.762-.761a.75.75 0 0 1 1.06-1.061l.232.232.953-.953a.75.75 0 1 1 1.06 1.06m9.012-9.722c-.682-.683-1.642-1.079-2.777-1.208v-.994a.75.75 0 0 0-1.5 0v2.576c0 .301.18.557.436.677a.75.75 0 0 1-.314.073.75.75 0 0 1-.75-.75V4.247a.2.2 0 0 0-.2-.2H9.321v-.922a.75.75 0 0 0-1.5 0v2.576c0 .301.18.557.436.677a.75.75 0 0 1-.314.073.75.75 0 0 1-.75-.75V4.355a.194.194 0 0 0-.229-.194C4.711 4.586 3.4 6.223 3.4 8.726v8.145c0 2.978 1.792 4.755 4.794 4.755h7.613c3.001 0 4.793-1.752 4.793-4.687V8.728c.004-1.413-.422-2.589-1.231-3.401"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarDoneBold;
