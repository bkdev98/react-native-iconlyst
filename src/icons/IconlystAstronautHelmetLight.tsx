import * as React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAstronautHelmetLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.216 10.665 2.572-6.722a.445.445 0 0 1 .591-.256 9.587 9.587 0 0 1 4.671 13.168.445.445 0 0 1-.62.174l-6.24-3.602"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.528 4.607a8.411 8.411 0 0 0-9.543 13.149c.153.188.244.42.245.663l.012 2.162a1 1 0 0 0 1 .994h10.331a1 1 0 0 0 .942-1.338l-.502-1.396a8.5 8.5 0 0 0 1.748-2.083M5.229 18.043h9.553"
    />
    <Circle
      cx={11.527}
      cy={12.466}
      r={1.846}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
  </Svg>
);
export default IconlystAstronautHelmetLight;
