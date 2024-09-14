import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelephoneLight = ({
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
      d="M11.998 6.94c-4.447 0-2.38 3.391-5.21 3.392-2.73 0-3.788.512-3.788-2.947.043-.391-.676-3.863 8.998-3.864S20.958 6.992 21 7.382c0 3.468-1.058 2.947-3.788 2.948-2.831 0-.767-3.39-5.214-3.39"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.515 12.758v3.526c0 2.457-1.537 4.196-3.995 4.196H8.47c-2.458 0-3.986-1.74-3.986-4.196v-3.516"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.194 14.426a2.193 2.193 0 1 0-4.387 0 2.193 2.193 0 0 0 4.387 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTelephoneLight;
