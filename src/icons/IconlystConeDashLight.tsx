import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConeDashLight = ({
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
      d="M4.12 17.281c0 2.054 3.529 3.72 7.88 3.72 4.352 0 7.88-1.666 7.88-3.72M9.826 13.705c.69-.094 1.42-.143 2.174-.143.7 0 1.378.043 2.024.124M4.12 17.281c0-1.162 1.129-2.2 2.898-2.883M16.979 14.398c1.769.682 2.899 1.72 2.899 2.883"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.502 16.092 13.118 3.717c-.493-.956-1.746-.956-2.24 0L4.495 16.092"
    />
  </Svg>
);
export default IconlystConeDashLight;
