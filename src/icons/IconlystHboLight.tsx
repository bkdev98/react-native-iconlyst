import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHboLight = ({
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
      d="M9.527 12h2.588a1.647 1.647 0 1 0 0-3.293H9.893a.366.366 0 0 0-.366.366zm0 0h3.058a1.647 1.647 0 0 1 0 3.294H9.893a.366.366 0 0 1-.366-.366zM6.705 8.707v6.587m-4.705 0V8.707M6.705 12H2"
    />
    <Ellipse
      cx={19.23}
      cy={12}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      rx={2.769}
      ry={3.293}
    />
  </Svg>
);
export default IconlystHboLight;
