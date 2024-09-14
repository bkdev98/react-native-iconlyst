import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPickupVanTwoTone = ({
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
      d="M12.161 10.531v5.82M9.65 16.977c-.11.441-.366.833-.728 1.113a2.07 2.07 0 0 1-2.534 0 2.03 2.03 0 0 1-.728-1.113 2 2 0 0 1-.07-.553c0-.536.216-1.05.6-1.43a2.057 2.057 0 0 1 2.892 0c.507.504.75 1.306.568 1.983M19.853 16.377a1.98 1.98 0 0 1-.814 1.588 2.1 2.1 0 0 1-1.24.403c-.449 0-.884-.141-1.24-.403a1.98 1.98 0 0 1-.816-1.588c-.02-.272.02-.546.114-.803.094-.258.242-.493.435-.693.192-.2.426-.359.685-.468a2.12 2.12 0 0 1 1.643 0c.259.11.492.268.685.468.192.2.34.435.435.693s.133.53.113.803"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.97 10.382 16.652 6.08a1.26 1.26 0 0 0-1.11-.66h-2.58a.8.8 0 0 0-.8.8v4.16"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.898 16.792h.312a2.3 2.3 0 0 0 2.29-2.29v-1.77a2.3 2.3 0 0 0-2.29-2.29H2.5v4.08a2.29 2.29 0 0 0 2.29 2.29h.78M9.855 16.371h5.886"
    />
  </Svg>
);
export default IconlystPickupVanTwoTone;
