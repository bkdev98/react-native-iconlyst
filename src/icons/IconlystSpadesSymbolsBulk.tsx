import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSpadesSymbolsBulk = ({
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
      d="M11.998 21.5v-19h.005c.306.001.592.144.85.424l4.871 4.184c1.018.814 2.781 2.559 2.996 4.973.044.49.024.994-.06 1.496-.346 2.057-1.635 3.604-3.364 4.036-1.424.357-2.478.157-3.324-.233.278 1.765 1.59 3.253 1.604 3.27a.51.51 0 0 1-.38.85z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M11.998 21.5v-19h-.005c-.306.001-.592.144-.85.424L6.272 7.108c-1.018.814-2.781 2.559-2.996 4.973-.044.49-.024.994.06 1.496.346 2.057 1.635 3.604 3.364 4.036 1.424.357 2.478.157 3.324-.233-.278 1.765-1.59 3.253-1.604 3.27a.51.51 0 0 0 .38.85z"
    />
  </Svg>
);
export default IconlystSpadesSymbolsBulk;
