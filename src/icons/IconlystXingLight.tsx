import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXingLight = ({
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
      d="m9.126 5.662 1.423 2.978a.8.8 0 0 1-.028.749l-2.947 5.158a.81.81 0 0 1-.701.406h-2.69a.404.404 0 0 1-.353-.6l2.786-4.969a.8.8 0 0 0 .027-.738L5.296 5.778a.404.404 0 0 1 .366-.575h2.735c.311 0 .595.179.729.46M14.646 20.612l-3.873-6.37a.81.81 0 0 1-.013-.817L16.426 3.41A.81.81 0 0 1 17.13 3h2.688c.309 0 .503.332.353.6l-5.503 9.827a.81.81 0 0 0 .014.812l3.712 6.149a.404.404 0 0 1-.346.612h-2.711a.81.81 0 0 1-.69-.388"
    />
  </Svg>
);
export default IconlystXingLight;
