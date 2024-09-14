import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillSearchBold = ({
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
      d="M11.36 20.997a4.1 4.1 0 0 1-1.54-.304l-2.142-.875a1.3 1.3 0 0 0-1.04.03l-.758.364a1.69 1.69 0 0 1-1.644-.095 1.7 1.7 0 0 1-.794-1.444l.01-12.253c0-2.729 1.634-4.425 4.265-4.425h7.3c2.656 0 4.242 1.655 4.242 4.425l.01 6.617c0 .326-.375.523-.665.374a5.15 5.15 0 0 0-2.357-.567 5.2 5.2 0 0 0-5.192 5.2c0 .867.213 1.685.59 2.403.128.242-.011.55-.285.55M12.971 8.83H8.115a.75.75 0 0 1 0-1.5h4.856a.75.75 0 0 1 0 1.5M11.352 12.6H8.115a.75.75 0 1 1 0-1.5h3.237a.75.75 0 0 1 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.278 21.785a.747.747 0 0 0 1.06 0 .75.75 0 0 0 0-1.062l-1.058-1.055a3.45 3.45 0 0 0-3.033-5.074 3.445 3.445 0 0 0 0 6.891c.768 0 1.477-.253 2.05-.679zm-4.973-3.74c0-1.076.871-1.95 1.942-1.95s1.941.874 1.941 1.95a1.943 1.943 0 0 1-1.94 1.94 1.943 1.943 0 0 1-1.943-1.94"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillSearchBold;
