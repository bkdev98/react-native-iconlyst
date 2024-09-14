import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthShieldLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.75 20.07c-4.934-.741-8.217-5.908-6.803-10.72A8.435 8.435 0 0 1 14.43 3.634c.073.027.154.046.227.073a8.44 8.44 0 0 1 5.726 6.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.196 19.186s1.223-2.12.006-3.82C6.986 13.67 6.93 12.971 7.155 12.32c.458-1.327 2.28-1.32 1.549-4.074C8.222 6.43 7.45 5.154 7.678 4.527M20.384 10.354c-.825-.306-2.433-.505-5.16.452-3.247 1.142-2.663-3.118-.568-7.099"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.419 21.282s-2.94-.89-2.94-3.343c0-2.454-.105-2.375.13-2.612.237-.239 2.425-.999 2.81-.999s2.575.762 2.81 1c.237.234.13.157.13 2.611s-2.94 3.343-2.94 3.343"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEarthShieldLight;
