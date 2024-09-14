import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEarthShieldTwoTone = ({
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
      d="M11.25 20.07c-4.934-.741-8.217-5.908-6.803-10.72A8.435 8.435 0 0 1 14.93 3.634c.073.027.154.046.227.073a8.44 8.44 0 0 1 5.726 6.65"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.696 19.186s1.223-2.12.006-3.82C7.486 13.67 7.43 12.971 7.655 12.32c.458-1.327 2.28-1.32 1.549-4.074C8.722 6.43 7.95 5.154 8.178 4.527M20.884 10.354c-.825-.306-2.433-.505-5.16.452-3.247 1.142-2.663-3.118-.568-7.099"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.919 21.282s-2.94-.89-2.94-3.343c0-2.454-.105-2.375.13-2.612.237-.239 2.425-.999 2.81-.999s2.575.762 2.81 1c.237.234.13.157.13 2.611s-2.94 3.343-2.94 3.343"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEarthShieldTwoTone;
