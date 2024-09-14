import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScaleDashBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M21.686 12.877a.75.75 0 0 0-.75.75v2.258a.75.75 0 0 0 1.5 0v-2.258a.75.75 0 0 0-.75-.75M4.436 15.69v-2.063a.75.75 0 0 0-1.5 0v2.063a.75.75 0 0 0 1.5 0M21.686 7.895a.75.75 0 0 0-.75.75v2.063a.75.75 0 0 0 1.5 0V8.645a.75.75 0 0 0-.75-.75M3.686 11.459a.75.75 0 0 0 .75-.75V8.46a.75.75 0 0 0-1.5 0v2.248c0 .414.336.75.75.75M11.226 20.418H8.969a.75.75 0 0 0 0 1.5h2.257a.75.75 0 0 0 0-1.5M9.151 3.918h2.073a.75.75 0 0 0 0-1.5H9.151a.75.75 0 0 0 0 1.5M16.207 20.418h-2.062a.75.75 0 0 0 0 1.5h2.062a.75.75 0 0 0 0-1.5M14.144 3.918h2.257a.75.75 0 0 0 0-1.5h-2.257a.75.75 0 0 0 0 1.5M6.315 19.87a3.3 3.3 0 0 1-1.37-1.469.75.75 0 1 0-1.352.65 4.78 4.78 0 0 0 1.996 2.132.746.746 0 0 0 1.019-.293.75.75 0 0 0-.293-1.02M21.374 18.232a.75.75 0 0 0-1.018.3 3.42 3.42 0 0 1-1.44 1.425.749.749 0 1 0 .694 1.33 4.96 4.96 0 0 0 2.063-2.037.75.75 0 0 0-.3-1.018M3.99 6.113a.747.747 0 0 0 1.016-.3 3.5 3.5 0 0 1 1.445-1.438.75.75 0 0 0-.705-1.325A4.97 4.97 0 0 0 3.69 5.096a.75.75 0 0 0 .3 1.017M19.045 4.452c.59.338 1.069.854 1.383 1.49a.75.75 0 0 0 1.345-.663 4.96 4.96 0 0 0-1.983-2.13.75.75 0 0 0-.745 1.303"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.433 9.189c0-2.208-1.376-3.768-3.586-3.768H9.523c-2.204 0-3.585 1.56-3.585 3.768v5.958c0 2.208 1.375 3.768 3.585 3.768h6.324c2.21 0 3.586-1.56 3.586-3.768z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystScaleDashBulk;
