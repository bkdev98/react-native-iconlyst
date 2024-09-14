import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinMobilePhoneBroken = ({
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
      d="M6.125 12v5.383A3.62 3.62 0 0 0 9.743 21h5.514a3.62 3.62 0 0 0 3.619-3.619l-.001-10.763A3.62 3.62 0 0 0 15.257 3H9.742a3.62 3.62 0 0 0-3.618 3.618v2.187"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.948 10.129h-2.112v3.023h2.176c.885 0 1.591-.758 1.506-1.66-.075-.786-.78-1.363-1.57-1.363"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.948 7.105h-2.112v3.024h2.176c.885 0 1.591-.758 1.506-1.66-.075-.787-.78-1.364-1.57-1.364M12.408 14.044v-.892M12.408 7.1V6.21M15.758 17.303h-9.6"
    />
  </Svg>
);
export default IconlystBitcoinMobilePhoneBroken;
