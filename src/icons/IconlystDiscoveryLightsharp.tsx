import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscoveryLightsharp = ({
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
      strokeWidth={1.5}
      d="M9.267 14.984h-.001l1.071-4.897 4.897-1.072h.001l-1.072 4.898z"
    />
    <Circle
      cx={12.25}
      cy={12}
      r={9.25}
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystDiscoveryLightsharp;
