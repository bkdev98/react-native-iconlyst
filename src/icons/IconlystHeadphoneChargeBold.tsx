import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneChargeBold = ({
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
      d="M18.876 11.672v.74a2.15 2.15 0 0 0-1.222.148 2.17 2.17 0 0 0-1.27 1.505l-.941 3.936c-.162.678 0 1.375.444 1.914a2.13 2.13 0 0 0 1.752.783q.335-.013.68-.082a4.25 4.25 0 0 0 3.287-3.096c.41-1.593-.079-3.208-1.23-4.273v-1.575c0-4.618-3.757-8.374-8.375-8.374s-8.375 3.756-8.375 8.374v1.574c-1.152 1.063-1.642 2.678-1.232 4.274a4.26 4.26 0 0 0 3.969 3.178h.005l.09.002c.643 0 1.242-.284 1.657-.787A2.18 2.18 0 0 0 8.559 18l-.943-3.934a2.17 2.17 0 0 0-1.27-1.507 2.17 2.17 0 0 0-1.22-.148v-.739A6.88 6.88 0 0 1 12 4.798a6.88 6.88 0 0 1 6.875 6.874"
    />
    <Path
      fill={props.color}
      d="M11.633 16.488a.75.75 0 0 0 1.017-.301l1.467-2.695a.747.747 0 0 0-.658-1.108h-1.655l.862-1.588a.75.75 0 0 0-.3-1.017.75.75 0 0 0-1.017.3l-1.466 2.696a.752.752 0 0 0 .659 1.109h1.655l-.864 1.587a.75.75 0 0 0 .3 1.017"
    />
  </Svg>
);
export default IconlystHeadphoneChargeBold;
