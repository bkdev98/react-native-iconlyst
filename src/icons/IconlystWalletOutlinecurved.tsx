import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletOutlinecurved = ({
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
      d="M17.535 10.299a1.813 1.813 0 0 0 0 3.627h3.886a.75.75 0 0 1 0 1.5h-3.886a3.313 3.313 0 0 1 0-6.627h3.856a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.925 12.053a.75.75 0 0 1 .75-.75h.297a.75.75 0 0 1 0 1.5h-.297a.75.75 0 0 1-.75-.75M7.106 8.144a.75.75 0 0 1 .75-.75h4.06a.75.75 0 0 1 0 1.5h-4.06a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.506 6.134c-1.213 1.113-1.792 2.97-1.792 6.12 0 3.147.58 5.005 1.792 6.118 1.231 1.13 3.302 1.67 6.76 1.67 3.456 0 5.526-.54 6.757-1.67 1.213-1.113 1.792-2.971 1.792-6.119s-.58-5.006-1.792-6.119c-1.23-1.13-3.301-1.67-6.758-1.67s-5.528.54-6.76 1.67M4.49 5.03c1.675-1.537 4.255-2.065 7.774-2.065s6.098.528 7.773 2.065c1.694 1.556 2.277 3.968 2.277 7.224s-.583 5.668-2.277 7.224c-1.675 1.537-4.254 2.065-7.773 2.065s-6.099-.528-7.774-2.065c-1.694-1.556-2.277-3.968-2.277-7.224s.583-5.668 2.277-7.224"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletOutlinecurved;
