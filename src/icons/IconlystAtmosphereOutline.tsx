import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAtmosphereOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.614 10.268a1.732 1.732 0 1 0 0 3.464 1.732 1.732 0 0 0 0-3.464M9.382 12a3.232 3.232 0 1 1 6.464 0 3.232 3.232 0 0 1-6.464 0M7.36 14.099a.75.75 0 0 1 1.022.284 4.85 4.85 0 0 0 4.232 2.472.75.75 0 0 1 0 1.5 6.35 6.35 0 0 1-5.538-3.234.75.75 0 0 1 .285-1.022M18.22 11.25a.75.75 0 0 1 .75.75 6.33 6.33 0 0 1-1.452 4.043.75.75 0 1 1-1.157-.955A4.83 4.83 0 0 0 17.469 12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.614 7.145A4.855 4.855 0 0 0 7.759 12a.75.75 0 0 1-1.5 0 6.355 6.355 0 0 1 6.355-6.355.75.75 0 0 1 0 1.5M8.335 19.955a.75.75 0 0 1 .987-.388 8.2 8.2 0 0 0 3.293.683.75.75 0 0 1 0 1.5 9.7 9.7 0 0 1-3.892-.808.75.75 0 0 1-.388-.987M15.599 3.473a.75.75 0 0 1 .99-.378 9.78 9.78 0 0 1 5.208 5.62.75.75 0 0 1-1.413.506 8.28 8.28 0 0 0-4.407-4.757.75.75 0 0 1-.379-.99M5.395 6.573a.75.75 0 0 1 .235 1.035A8.2 8.2 0 0 0 4.364 12c0 1.393.345 2.704.953 3.853a.75.75 0 1 1-1.326.702A9.7 9.7 0 0 1 2.864 12c0-1.907.549-3.688 1.497-5.192a.75.75 0 0 1 1.034-.235M12.614 3.75A8.2 8.2 0 0 0 8.57 4.807.75.75 0 1 1 7.834 3.5a9.7 9.7 0 0 1 4.78-1.25.75.75 0 0 1 0 1.5M21.207 14.787c.382.16.562.6.402.982a9.8 9.8 0 0 1-3.23 4.095.75.75 0 0 1-.888-1.209 8.3 8.3 0 0 0 2.734-3.467.75.75 0 0 1 .982-.401"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAtmosphereOutline;
