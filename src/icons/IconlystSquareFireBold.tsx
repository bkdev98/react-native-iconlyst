import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareFireBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M13.1 10.07c-.034 1.801-.654 2.964-1.78 3.265a.97.97 0 0 1-.849-.223c-.246-.21-.509-.65-.722-1.11-.78.998-.656 2.123-.244 2.9.448.845 1.508 1.72 3.02 1.386l.04-.008c1.087-.178 1.64-.86 1.913-1.402.475-.944.453-2.149-.059-3.145a4.8 4.8 0 0 0-1.32-1.664"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.818 15.553a4.02 4.02 0 0 1-2.992 2.205 4.6 4.6 0 0 1-.949.102c-1.547 0-2.937-.824-3.697-2.254-.905-1.706-.575-3.679.84-5.028.181-.186.411-.414.611-.553a.75.75 0 0 1 1.179.615c.036.145.255.675.446 1.032.312-.45.44-1.58.261-2.944a.749.749 0 0 1 1.092-.762c1.478.773 2.539 1.816 3.154 3.101.718 1.395.742 3.122.055 4.486m.398-12.182H7.782c-3.159 0-5.282 2.222-5.282 5.53v7.94c0 3.307 2.123 5.53 5.282 5.53h8.433c3.161 0 5.285-2.223 5.285-5.53v-7.94c0-3.308-2.123-5.53-5.284-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareFireBold;
