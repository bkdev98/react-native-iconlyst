import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletSearchBulk = ({
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
      d="M15.245 11.44a3.29 3.29 0 0 1 3.28-3.29h4.007a.29.29 0 0 0 .292-.303c-.185-2.84-2.541-5.097-5.429-5.097h-8.13c-2.99 0-5.43 2.44-5.43 5.44v3.092c0 .237.264.383.476.275a5.5 5.5 0 0 1 2.514-.597c1.51 0 2.92.59 3.99 1.66a5.56 5.56 0 0 1 1.64 3.97 5.57 5.57 0 0 1-1.033 3.251c-.151.213-.008.529.253.529h5.72c3.023 0 5.286-2.443 5.432-5.35a.29.29 0 0 0-.292-.3h-4.01c-1.81 0-3.28-1.47-3.28-3.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.365 11.378c0 .41-.33.75-.74.75h-.01c-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.42 0 .75.34.75.75m-2.62.06c0 .98.8 1.78 1.78 1.78h4.01a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3h-4.01c-.98 0-1.78.8-1.78 1.79M8.507 18.27a2.36 2.36 0 0 1-1.682.7 2.36 2.36 0 0 1-1.68-.7l-.003-.003a2.36 2.36 0 0 1-.697-1.677c0-.634.248-1.232.7-1.684a2.365 2.365 0 0 1 3.364.002c.45.45.697 1.047.696 1.682 0 .634-.247 1.23-.698 1.68m-1.682-5.563a3.85 3.85 0 0 0-2.742 1.14 3.85 3.85 0 0 0-1.138 2.743c.001.78.231 1.524.658 2.157l-1.22 1.223a.751.751 0 0 0 1.063 1.059l1.217-1.221c.634.43 1.38.663 2.161.663a3.85 3.85 0 0 0 2.745-1.142 3.85 3.85 0 0 0 1.136-2.74 3.85 3.85 0 0 0-1.135-2.74 3.85 3.85 0 0 0-2.745-1.142"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletSearchBulk;
