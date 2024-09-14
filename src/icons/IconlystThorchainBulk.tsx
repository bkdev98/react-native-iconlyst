import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThorchainBulk = ({
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
      fill={props.color}
      d="M19.055 2.584a1.144 1.144 0 0 1 1.393.44 1.15 1.15 0 0 1-.124 1.46l-6.915 7.283a.3.3 0 0 0-.081.233h-1.656a.3.3 0 0 0-.09-.188L7.424 7.8a.499.499 0 0 1 .169-.827z"
    />
    <Path
      fill={props.color}
      d="M13.328 12h-1.656a.3.3 0 0 1-.08.234l-6.917 7.282a1.15 1.15 0 0 0-.123 1.463 1.146 1.146 0 0 0 1.391.438l11.462-4.39a.501.501 0 0 0 .169-.827l-4.156-4.01a.3.3 0 0 1-.09-.19"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystThorchainBulk;
