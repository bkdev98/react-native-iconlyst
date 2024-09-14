import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKingSquareLight = ({
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
      d="M8.282 3h8.435C19.665 3 21.5 5.081 21.5 8.026v7.948c0 2.945-1.835 5.026-4.784 5.026H8.282C5.334 21 3.5 18.919 3.5 15.974V8.026C3.5 5.081 5.343 3 8.282 3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.645 9.638-1.903 1.54a.23.23 0 0 1-.322-.023l-1.746-1.963a.232.232 0 0 0-.348 0l-1.746 1.963a.23.23 0 0 1-.32.024L8.354 9.638a.234.234 0 0 0-.378.222l.779 4.42a.73.73 0 0 0 .722.604h6.046c.356 0 .66-.254.723-.604l.776-4.421a.233.233 0 0 0-.378-.221"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystKingSquareLight;
