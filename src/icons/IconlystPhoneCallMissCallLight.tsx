import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallMissCallLight = ({
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
      d="M11.998 15.244c-4.448 0-2.38 3.392-5.21 3.393-2.73 0-3.788.51-3.788-2.948.043-.39-.676-3.862 8.998-3.863 9.674-.002 8.96 3.47 9.002 3.86 0 3.468-1.058 2.948-3.788 2.948-2.83 0-.767-3.39-5.214-3.39"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.343 7.752-.005-2.408 2.408.005"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.668 5.752-3.462 3.462L8.33 5.338"
    />
  </Svg>
);
export default IconlystPhoneCallMissCallLight;
