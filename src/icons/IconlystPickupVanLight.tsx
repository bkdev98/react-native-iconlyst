import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPickupVanLight = ({
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
      d="M9.4 16.976c-.11.441-.366.833-.728 1.113a2.07 2.07 0 0 1-2.534 0 2.03 2.03 0 0 1-.728-1.113 2 2 0 0 1-.07-.553c0-.536.216-1.05.6-1.43a2.057 2.057 0 0 1 2.892 0c.507.504.75 1.306.568 1.983M19.603 16.377a1.98 1.98 0 0 1-.814 1.588 2.1 2.1 0 0 1-1.24.403c-.449 0-.884-.141-1.24-.403a1.98 1.98 0 0 1-.816-1.588c-.02-.272.02-.546.114-.803.094-.258.242-.493.435-.693.192-.2.426-.359.685-.468a2.12 2.12 0 0 1 1.643 0c.259.11.492.268.685.468.192.2.34.435.435.693s.133.53.113.803M18.72 10.382l-2.319-4.3a1.26 1.26 0 0 0-1.11-.66h-2.58a.8.8 0 0 0-.8.8v10.13"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.648 16.792h.312a2.3 2.3 0 0 0 2.29-2.29v-1.77a2.3 2.3 0 0 0-2.29-2.29H2.25v4.08a2.29 2.29 0 0 0 2.29 2.29h.78M9.605 16.371h5.886"
    />
  </Svg>
);
export default IconlystPickupVanLight;
