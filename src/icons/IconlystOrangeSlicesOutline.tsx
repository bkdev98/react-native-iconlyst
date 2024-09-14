import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeSlicesOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.937 11.715c-.048-.134-.186-.168-.277-.115l-8.954 5.17c-.091.053-.13.19-.038.298a5.45 5.45 0 0 0 6.86 1.18 5.445 5.445 0 0 0 2.409-6.533m1.413-.503c-.349-.981-1.505-1.451-2.44-.912l-8.954 5.17c-.935.54-1.106 1.778-.43 2.57v.001a6.95 6.95 0 0 0 8.752 1.507 6.945 6.945 0 0 0 3.072-8.335"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.14 13.283a.75.75 0 0 1 .91-.5l5.942 1.593a.75.75 0 0 1-.388 1.449l-5.25-1.407-1.654 5.253a.75.75 0 1 1-1.431-.45z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.48 12.858a.75.75 0 0 1 1.024.274l3.098 5.358a.75.75 0 0 1-1.298.751l-3.098-5.358a.75.75 0 0 1 .273-1.025M4.063 5.164c.048-.134.186-.168.277-.116l8.954 5.17c.091.053.13.19.038.299a5.45 5.45 0 0 1-6.86 1.18 5.445 5.445 0 0 1-2.409-6.533M2.65 4.66c.349-.981 1.505-1.452 2.44-.912l8.954 5.17c.935.54 1.106 1.777.43 2.57a6.95 6.95 0 0 1-8.752 1.507A6.945 6.945 0 0 1 2.65 4.661"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.86 6.731a.75.75 0 0 0-.91-.499L3.009 7.824a.75.75 0 1 0 .388 1.45l5.25-1.407L10.3 13.12a.75.75 0 1 0 1.431-.451z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.52 6.307a.75.75 0 0 0-1.024.274l-3.098 5.358a.75.75 0 1 0 1.299.75l3.098-5.357a.75.75 0 0 0-.274-1.025"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOrangeSlicesOutline;
