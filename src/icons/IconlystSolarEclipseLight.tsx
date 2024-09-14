import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSolarEclipseLight = ({
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.468 3v1.372m0 15.256V21m9-9h-1.372M17.83 5.636l-.97.97m.97 11.758-.97-.97M10.321 16.038a4.196 4.196 0 1 0 0-8.075M8.336 9.209A4.18 4.18 0 0 0 7.272 12c0 1.072.402 2.05 1.064 2.793"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3.76 4.292A7.71 7.71 0 0 1 11.469 12c0 4.258-3.45 7.71-7.707 7.71"
    />
  </Svg>
);
export default IconlystSolarEclipseLight;
