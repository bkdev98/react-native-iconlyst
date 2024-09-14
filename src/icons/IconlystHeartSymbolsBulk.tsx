import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSymbolsBulk = ({
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
      d="M12 20.38V5.207l.002.002a5.9 5.9 0 0 1 1.415-.98c1.614-.8 3.448-.79 5.025.032 1.616.839 2.703 2.377 2.985 4.219.659 4.556-3.325 7.634-6.526 10.109l-.007.005c-.53.409-1.041.804-1.514 1.193-.232.192-.434.359-.703.46a1.8 1.8 0 0 1-.675.133z"
    />
    <Path
      fill={props.color}
      d="M12 20.38V5.207l-.002.002a5.9 5.9 0 0 0-1.416-.98c-1.614-.8-3.447-.79-5.025.032C3.942 5.1 2.854 6.638 2.572 8.48c-.658 4.556 3.325 7.634 6.526 10.109l.007.005c.53.409 1.041.804 1.515 1.193.23.192.433.359.703.46.213.09.444.133.675.133z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHeartSymbolsBulk;
