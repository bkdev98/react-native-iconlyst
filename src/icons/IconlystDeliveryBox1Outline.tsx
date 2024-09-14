import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBox1Outline = ({
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
      d="M10.508 2.676a3.19 3.19 0 0 1 3.183 0l5.68 3.279a3.19 3.19 0 0 1 1.59 2.757v6.558a3.18 3.18 0 0 1-1.59 2.756l-5.68 3.278a3.2 3.2 0 0 1-1.4.421.75.75 0 0 1-.382 0 3.2 3.2 0 0 1-1.401-.42l-5.68-3.28a3.18 3.18 0 0 1-1.59-2.755V8.712c0-.545.138-1.069.39-1.53a.8.8 0 0 1 .116-.193c.27-.42.638-.776 1.084-1.034zM4.743 8.574a2 2 0 0 0-.006.138v6.558c0 .6.321 1.157.841 1.456l5.68 3.28.092.049v-7.66zm8.107 3.817v7.664l.091-.05 5.68-3.278c.52-.3.84-.857.84-1.457V8.712q0-.072-.005-.143l-2.409 1.394v2.319a.75.75 0 1 1-1.5 0V10.83zm3.437-3.722 2.389-1.382-.056-.033-5.678-3.279c-.522-.3-1.163-.3-1.685 0l-1.544.892zM8.214 5.732l6.575 3.804-2.693 1.558L5.519 7.29l.06-.036z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBox1Outline;
