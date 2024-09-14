import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRefresh2Bulk = ({
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
      d="M15.775 2.625h-8.8c-2.9 0-5.1 2.4-5.1 5.5v6.2c0 1.6.6 3.1 1.6 4.1.9.9 2.1 1.4 3.5 1.4h5.857c.212 0 .358-.215.295-.418a5.7 5.7 0 0 1-.252-1.682c0-3.2 2.6-5.8 5.8-5.8.62 0 1.216.095 1.775.28.205.067.425-.079.425-.294V8.125c-.1-3.1-2.3-5.5-5.1-5.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m17.075 9.025-4 3.2q-.75.6-1.8.6-.9 0-1.8-.6l-4-3.3c-.3-.3-.4-.7-.1-1.1s.7-.4 1.1-.1l4 3.2c.5.4 1.2.4 1.6 0l4-3.2c.3-.3.8-.2 1.1.1.3.4.2.9-.1 1.2M19.945 19.395c-.397.397-.964.48-1.37.48a2.15 2.15 0 0 1-2.15-2.15.75.75 0 1 0-1.5 0 3.654 3.654 0 0 0 3.65 3.65c.974 0 1.838-.327 2.43-.92a.75.75 0 1 0-1.06-1.06M18.475 14.075c-.975 0-1.838.327-2.431.92a.749.749 0 1 0 1.061 1.06c.397-.397.964-.48 1.37-.48 1.186 0 2.15.964 2.15 2.15a.75.75 0 0 0 1.5 0 3.653 3.653 0 0 0-3.65-3.65"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystEmailRefresh2Bulk;
