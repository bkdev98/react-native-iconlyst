import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardBulk = ({
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
      d="M21.699 9.09a.3.3 0 0 0 .3-.3v-.08c0-2.794-1.794-4.67-4.464-4.67H7.464c-2.67 0-4.463 1.876-4.463 4.67v.08a.3.3 0 0 0 .3.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.301 10.59a.3.3 0 0 0-.3.3v4.4c0 2.793 1.793 4.67 4.463 4.67h10.07c2.671 0 4.465-1.877 4.465-4.67v-4.4a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBankCardBulk;
