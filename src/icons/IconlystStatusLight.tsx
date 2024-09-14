import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStatusLight = ({
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
      d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.052 12.17q.872.112 1.75.075c1.808-.101 2.903-1.028 2.825-2.415-.08-1.388-1.534-2.28-3-2.198-2.374.131-4.125 2.216-4.32 4.602q.485-.112.982-.14.879-.038 1.751.076z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.303 12.233c-1.125.217-1.995.85-1.92 2.122s1.455 2.089 2.835 2.018c2.25-.124 3.897-1.995 4.084-4.182"
    />
  </Svg>
);
export default IconlystStatusLight;
