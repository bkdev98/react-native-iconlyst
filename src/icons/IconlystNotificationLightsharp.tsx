import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotificationLightsharp = ({
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
      strokeWidth={1.5}
      d="M6.062 8.938a6.188 6.188 0 0 1 12.376 0v4.58l1.612 4.34H4.45l1.612-4.34z"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M15.418 17.857v.226a3.167 3.167 0 0 1-6.334 0v-.226"
    />
  </Svg>
);
export default IconlystNotificationLightsharp;
