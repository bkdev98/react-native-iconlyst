import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPocketLikeOutline = ({
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
      d="M14.859 2.327a2.402 2.402 0 0 1 3.002 2.326v1.994a2.895 2.895 0 0 1 2.106 2.786v9.423c0 1.6-1.295 2.894-2.894 2.894H7.38a2.894 2.894 0 0 1-2.895-2.894V6.696c0-.996.675-1.865 1.638-2.115zM5.985 8.04v10.817c0 .77.625 1.394 1.395 1.394h9.693c.77 0 1.394-.623 1.394-1.394V9.433c0-.77-.623-1.394-1.394-1.394zm.019-1.5a.69.69 0 0 1 .495-.506l8.734-2.253a.902.902 0 0 1 1.128.873V6.54z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.814 12.268c-.558.18-.871.83-.634 1.572.192.597.738 1.193 1.335 1.678.263.214.516.39.71.516.198-.128.453-.306.72-.523.6-.49 1.143-1.083 1.327-1.667v-.004c.238-.738-.075-1.389-.633-1.571a1.08 1.08 0 0 0-.965.164.75.75 0 0 1-.896-.002 1.07 1.07 0 0 0-.964-.163m1.413 4.644-.36.659-.003-.002-.007-.004-.024-.014-.083-.047q-.107-.062-.286-.176a10 10 0 0 1-.895-.646c-.653-.53-1.487-1.356-1.818-2.383v-.001c-.41-1.285.033-2.951 1.603-3.458h.002a2.57 2.57 0 0 1 1.872.121 2.58 2.58 0 0 1 1.862-.123l.007.002c1.566.506 2.017 2.169 1.605 3.456-.322 1.021-1.159 1.848-1.811 2.379a10 10 0 0 1-1.268.875l-.024.014-.008.004-.002.001c-.001 0-.002 0-.362-.657m0 0 .361.658a.75.75 0 0 1-.72 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPocketLikeOutline;
