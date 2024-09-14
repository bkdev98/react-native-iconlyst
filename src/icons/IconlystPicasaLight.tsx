import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPicasaLight = ({
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
      d="M11.46 20.98 8.2 10.96M17.72 5.05l-3.37 10.38M18.364 5.636a9 9 0 0 1 0 12.728 9 9 0 1 1 0-12.728M9.65 15.43h10.67M3.35 14.48 12 8.2M15.8 10.96 6.97 4.54"
    />
  </Svg>
);
export default IconlystPicasaLight;
