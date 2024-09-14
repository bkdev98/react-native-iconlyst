import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcentwalletTwoTone = ({
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
      d="M20.361 8.009v7.982c0 .364-.194.7-.508.881l-6.912 3.992a1.02 1.02 0 0 1-1.017 0l-6.915-3.992a1.02 1.02 0 0 1-.509-.88V8.008c0-.364.194-.7.509-.881l6.915-3.992a1.02 1.02 0 0 1 1.017 0l6.912 3.992c.314.181.508.517.508.88"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.59 9.998 2.959 1.71c.315.181.509.517.509.88v1.497c0 .363-.194.7-.509.88l-3.607 2.084a1.02 1.02 0 0 1-1.018 0l-3.607-2.083a1.02 1.02 0 0 1-.508-.881M12.942 3.137v3.267L8.317 9.036a1.02 1.02 0 0 0-.508.88v4.168"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.59 9.996v2.671l-2.313 1.335v-2.67z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.965 14.512 3.167 2.118M7.911 14.512 4.744 16.63M13.598 9.99l1.89-1.043V4.611"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDcentwalletTwoTone;
