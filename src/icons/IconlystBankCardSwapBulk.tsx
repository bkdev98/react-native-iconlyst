import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBankCardSwapBulk = ({
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
      d="M3.044 14.713c-.027.17.111.316.283.316h9.426c.172 0 .31-.146.283-.316-.2-1.257-1.152-2.094-2.456-2.094H5.5c-1.304 0-2.257.837-2.456 2.094M3 18.538c0 1.53 1.03 2.6 2.5 2.6h5.08c1.47 0 2.5-1.07 2.5-2.6v-1.71a.3.3 0 0 0-.3-.3H3.3a.3.3 0 0 0-.3.3zM19.5 2.898h-5.08c-1.304 0-2.267.848-2.459 2.107-.026.17.113.313.284.313h9.43c.171 0 .31-.144.284-.313-.192-1.26-1.155-2.107-2.459-2.107M22 8.818v-1.7a.3.3 0 0 0-.3-.3h-9.48a.3.3 0 0 0-.3.3v1.7c0 1.53 1.03 2.6 2.5 2.6h5.08c1.47 0 2.5-1.07 2.5-2.6"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M4.25 8.47a4.37 4.37 0 0 1 3.226-4.21l-.175.468a.75.75 0 1 0 1.406.523l.607-1.63a.75.75 0 0 0-.703-1.012A5.867 5.867 0 0 0 2.75 8.47a.75.75 0 0 0 1.5 0M21.5 14.779a.75.75 0 0 0-.75.75 4.37 4.37 0 0 1-3.229 4.212l.178-.481a.749.749 0 1 0-1.406-.521l-.607 1.64a.75.75 0 0 0 .703 1.01 5.867 5.867 0 0 0 5.861-5.86.75.75 0 0 0-.75-.75" />
    </G>
  </Svg>
);
export default IconlystBankCardSwapBulk;
