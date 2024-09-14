import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinMobilePhoneTwoTone = ({
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
      d="M18.875 6.618v10.764A3.62 3.62 0 0 1 15.258 21H9.743a3.62 3.62 0 0 1-3.618-3.617L6.124 6.618A3.62 3.62 0 0 1 9.742 3h5.515a3.62 3.62 0 0 1 3.618 3.618"
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
      d="M12.948 7.105h-2.112v3.024h2.176c.885 0 1.591-.758 1.506-1.66-.075-.787-.78-1.364-1.57-1.364"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.408 14.044v-.892M12.408 7.1V6.21M18.876 17.303H6.158"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBitcoinMobilePhoneTwoTone;
