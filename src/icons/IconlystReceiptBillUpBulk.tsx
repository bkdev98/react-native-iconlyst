import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillUpBulk = ({
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
      d="M13.005 8.81h-4.97a.75.75 0 0 1 0-1.5h4.97a.75.75 0 0 1 0 1.5m-1.657 3.86H8.035a.75.75 0 0 1 0-1.5h3.313a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.787 21.213a4.1 4.1 0 0 1-1.539-.304l-2.143-.875a1.29 1.29 0 0 0-1.039.03l-.759.363c-.53.254-1.143.22-1.643-.094a1.69 1.69 0 0 1-.795-1.445l.01-12.253c0-2.729 1.635-4.424 4.266-4.424h7.3c2.656 0 4.242 1.654 4.242 4.424l.01 6.736a.3.3 0 0 1-.512.212l-.375-.376a2.5 2.5 0 0 0-1.842-.81h-.003c-.665 0-1.303.265-1.77.737l-2.416 2.425a2.5 2.5 0 0 0 1.4 4.237.33.33 0 0 1 .29.317v.129a.3.3 0 0 1-.187.278l-.956.39a4.1 4.1 0 0 1-1.539.303"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.969 21.789a.75.75 0 0 1-.75-.75V16.71l-1.138 1.142a.749.749 0 1 1-1.061-1.059l2.415-2.426a.75.75 0 0 1 .53-.22h.003c.229 0 .433.101.57.261l2.375 2.385a.75.75 0 0 1-1.062 1.058l-1.133-1.136v4.322a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillUpBulk;
