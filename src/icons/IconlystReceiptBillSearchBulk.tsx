import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillSearchBulk = ({
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
      d="M12.97 8.83H8.116a.75.75 0 0 1 0-1.5h4.856a.75.75 0 0 1 0 1.5M11.353 12.6H8.115a.75.75 0 1 1 0-1.5h3.237a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.36 20.997a4.1 4.1 0 0 1-1.54-.304l-2.142-.875a1.3 1.3 0 0 0-1.04.03l-.758.364a1.69 1.69 0 0 1-1.644-.095 1.7 1.7 0 0 1-.794-1.444l.01-12.253c0-2.729 1.634-4.425 4.265-4.425h7.3c2.656 0 4.242 1.655 4.242 4.425l.01 6.617c0 .326-.375.523-.665.374a5.15 5.15 0 0 0-2.357-.567 5.2 5.2 0 0 0-5.192 5.2c0 .867.213 1.685.59 2.403.128.242-.011.55-.285.55"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.247 16.095a1.95 1.95 0 0 0-1.942 1.95c0 1.07.87 1.94 1.942 1.94 1.07 0 1.94-.87 1.94-1.94 0-1.075-.87-1.95-1.94-1.95m3.56 5.91a.75.75 0 0 1-.53-.22l-.98-.978a3.42 3.42 0 0 1-2.05.679 3.445 3.445 0 0 1 0-6.891 3.45 3.45 0 0 1 3.033 5.074l1.057 1.055a.75.75 0 0 1-.53 1.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillSearchBulk;
