import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAdobePhotoshopBulk = ({
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
      d="M16.217 2.5H7.782C4.623 2.5 2.5 4.723 2.5 8.03v7.94c0 3.308 2.123 5.53 5.282 5.53h8.434c3.16 0 5.284-2.222 5.284-5.53V8.03c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m15.808 12.49-.806-.317c-.423-.17-.44-.301-.45-.386-.02-.152.021-.196.087-.246.325-.248 1.131-.26 1.54-.097a.75.75 0 0 0 .975-.415.747.747 0 0 0-.415-.975c-.845-.343-2.205-.323-3.014.298-.508.389-.744.965-.662 1.62.09.726.555 1.263 1.385 1.595l.806.318c.423.17.44.3.451.386.02.15-.022.195-.087.245-.324.25-1.134.262-1.54.096a.757.757 0 0 0-.977.416.75.75 0 0 0 .416.977c.352.142.793.22 1.246.22.636 0 1.297-.156 1.77-.52.506-.39.741-.965.66-1.62-.09-.726-.555-1.263-1.385-1.594"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.387 12.848c-.91.727-2.22.773-3.098.706v1.915a.75.75 0 0 1-1.5 0v-6.78a.75.75 0 0 1 .571-.73c.265-.062 2.621-.6 4.025.503.445.349.974 1.01.974 2.187 0 1.175-.529 1.844-.972 2.199M8.29 9.32c.672-.08 1.652-.086 2.172.323.171.135.398.385.398 1.005 0 .627-.232.886-.407 1.026-.52.417-1.492.432-2.163.369z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAdobePhotoshopBulk;
