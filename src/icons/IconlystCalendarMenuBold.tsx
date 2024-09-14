import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarMenuBold = ({
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
      d="M15.641 11.82h-3.987a.75.75 0 0 1 0-1.5h3.987a.75.75 0 0 1 0 1.5m0 4.821h-3.987a.75.75 0 0 1 0-1.5h3.987a.75.75 0 0 1 0 1.5M8.642 11.82H8.36a.75.75 0 0 1 0-1.5h.282a.75.75 0 0 1 0 1.5m0 4.821H8.36a.75.75 0 0 1 0-1.5h.282a.75.75 0 0 1 0 1.5M19.369 5.327c-.682-.683-1.641-1.079-2.777-1.208v-.994a.75.75 0 0 0-1.5 0v2.576c0 .301.18.557.436.677a.75.75 0 0 1-.314.073.75.75 0 0 1-.75-.75V4.247a.2.2 0 0 0-.2-.2H9.321v-.922a.75.75 0 0 0-1.5 0v2.576c0 .301.18.557.436.677a.75.75 0 0 1-.314.073.75.75 0 0 1-.75-.75V4.355a.194.194 0 0 0-.229-.194C4.711 4.586 3.4 6.223 3.4 8.726v8.145c0 2.978 1.792 4.755 4.794 4.755h7.614c3 0 4.792-1.752 4.792-4.687V8.728c.004-1.413-.421-2.589-1.231-3.401"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarMenuBold;
