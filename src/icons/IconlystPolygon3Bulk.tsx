import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPolygon3Bulk = ({
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
      fill={props.color}
      d="M7.259 3.456A2.79 2.79 0 0 1 9.21 2.65H12v19H9.21a2.8 2.8 0 0 1-1.95-.805l-3.952-3.952A2.76 2.76 0 0 1 2.5 14.94V9.36c0-.73.286-1.425.806-1.95z"
    />
    <Path
      fill={props.color}
      d="M16.742 3.456a2.79 2.79 0 0 0-1.951-.806h-2.79v19h2.79c.724 0 1.434-.294 1.95-.805l3.952-3.952a2.76 2.76 0 0 0 .808-1.953V9.36c0-.73-.286-1.425-.806-1.95z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPolygon3Bulk;
