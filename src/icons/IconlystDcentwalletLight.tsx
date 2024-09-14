import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcentwalletLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.861 8.009v7.982c0 .364-.194.7-.508.881l-6.912 3.992a1.02 1.02 0 0 1-1.017 0l-6.915-3.992a1.02 1.02 0 0 1-.509-.88V8.008c0-.364.194-.7.509-.881l6.915-3.992a1.02 1.02 0 0 1 1.017 0l6.912 3.992c.314.181.508.517.508.88"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.09 9.997 2.959 1.71c.315.181.509.517.509.88v1.497c0 .363-.194.7-.509.881l-3.607 2.083a1.02 1.02 0 0 1-1.018 0l-3.607-2.083a1.02 1.02 0 0 1-.508-.881V9.917c0-.364.193-.7.508-.881l4.625-2.632V3.137"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.09 9.996v2.671l-2.313 1.335v-2.67zM16.465 14.512l3.167 2.118M7.41 14.512 4.243 16.63M13.098 9.99l1.89-1.043V4.611"
    />
  </Svg>
);
export default IconlystDcentwalletLight;
