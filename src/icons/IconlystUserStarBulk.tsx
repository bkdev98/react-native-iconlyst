import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserStarBulk = ({
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
      d="M16.06 17.22c.3.321.415.71.346 1.084l.009-.005a1.22 1.22 0 0 1 1.148.001 1.29 1.29 0 0 1 .325-1.052l.029-.028a1.22 1.22 0 0 1-.928-.682l-.005.01c-.221.388-.547.614-.923.671m-.664 3.715q-.182 0-.363-.054a1.23 1.23 0 0 1-.736-.6c-.14-.317-.168-.576-.117-.824l.187-1.095-.822-.79a1.2 1.2 0 0 1-.381-.886c0-.325.132-.638.365-.868.174-.18.408-.303.666-.348l1.178-.172.497-.999c.139-.308.41-.549.74-.653.306-.104.667-.074.968.093.205.097.406.3.523.548l.505 1.012 1.146.166c.298.04.582.2.786.454.386.51.34 1.203-.086 1.635l-.847.816.198 1.118a1.24 1.24 0 0 1-1.002 1.424 1.25 1.25 0 0 1-.835-.15l-.975-.506-1.028.538a1.2 1.2 0 0 1-.567.141M10.71 3.064A4.88 4.88 0 0 0 5.837 7.94a4.88 4.88 0 0 0 4.875 4.877 4.88 4.88 0 0 0 4.875-4.877 4.88 4.88 0 0 0-4.875-4.875"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.71 14.334c-4.98 0-7.21 2.75-7.21 5.48a.75.75 0 0 0 .75.75l5.81-.009 1.176-.002q.158-.005.305-.054c.425-.121.7-.469.7-.964v-4.183c0-.612-.444-1.018-1.531-1.018"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystUserStarBulk;
