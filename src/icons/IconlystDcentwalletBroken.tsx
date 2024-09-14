import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcentwalletBroken = ({
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
      d="M20.361 13.299v2.692c0 .364-.194.7-.508.881l-6.912 3.992a1.02 1.02 0 0 1-1.017 0l-6.915-3.992a1.02 1.02 0 0 1-.509-.88V8.008c0-.364.194-.7.509-.881l6.915-3.992a1.02 1.02 0 0 1 1.017 0l6.912 3.992c.314.181.508.517.508.88v1.996"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.942 17.048 3.607-2.083c.315-.182.509-.518.509-.881v-1.496c0-.364-.194-.7-.51-.881l-2.959-1.71M7.809 9.916v4.167c0 .364.193.7.508.881l1.804 1.042M12.942 3.137v3.267L10.63 7.72"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.59 12.667-2.313 1.335v-2.67l2.313-1.336M16.965 14.512l3.167 2.118M7.911 14.512 4.744 16.63M13.598 9.99l1.89-1.043V4.611"
    />
  </Svg>
);
export default IconlystDcentwalletBroken;
