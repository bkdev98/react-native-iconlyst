import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExitLight = ({
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
      strokeWidth={1.5}
      d="M12.504 11.124v1.752"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.444 18.584V5.416a2.666 2.666 0 0 1 3.209-2.61l5.223 1.085A2.665 2.665 0 0 1 20 6.5v11a2.665 2.665 0 0 1-2.124 2.61l-5.223 1.083a2.666 2.666 0 0 1-3.21-2.609M9.305 4.875H6.453A2.45 2.45 0 0 0 4 7.327v9.346a2.45 2.45 0 0 0 2.453 2.452h2.852"
    />
  </Svg>
);
export default IconlystExitLight;
