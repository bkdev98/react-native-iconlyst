import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessLockPasswordOutline = ({
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
      fillRule="evenodd"
      d="M20.337 8.265C15.682 3.638 8.921 3.632 4.26 8.244a.7.7 0 0 0-.05.948l8.651 10.286a.75.75 0 1 1-1.148.965L3.063 10.158a2.2 2.2 0 0 1 .143-2.98m17.132 1.087c.26.258.28.662.062.936l-.97 1.214a.75.75 0 1 0 1.172.937l.97-1.215a2.204 2.204 0 0 0-.176-2.936c-5.24-5.207-12.943-5.215-18.19-.023m14.333 5.624a2.28 2.28 0 0 1 2.307 2.25v.444a2.02 2.02 0 0 1 1.021 1.757v1.437c0 1.115-.904 2.02-2.02 2.02h-2.56a2.02 2.02 0 0 1-2.02-2.02v-1.437c0-.753.411-1.41 1.023-1.758v-.453a2.28 2.28 0 0 1 2.25-2.24m-1.375 3.944.043-.008a1 1 0 0 1 .08-.006h2.56a.5.5 0 0 1 .119.014c.23.053.401.26.401.507v1.437c0 .287-.233.52-.52.52h-2.56a.52.52 0 0 1-.52-.52v-1.437c0-.246.17-.451.397-.507m2.182-1.514h-1.556v-.17a.779.779 0 0 1 1.556.005z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessLockPasswordOutline;
