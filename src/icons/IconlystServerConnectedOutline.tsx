import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerConnectedOutline = ({
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
      d="M17.658 6.315a.75.75 0 0 1 .75-.75h.948A2.645 2.645 0 0 1 22 8.21v1.895a2.645 2.645 0 0 1-2.644 2.645h-.948a.75.75 0 1 1 0-1.5h.948c.632 0 1.144-.513 1.144-1.145V8.21c0-.632-.512-1.145-1.144-1.145h-.948a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.658 12a.75.75 0 0 1 .75-.75h.948A2.645 2.645 0 0 1 22 13.895v1.895a2.645 2.645 0 0 1-2.644 2.644h-.948a.75.75 0 0 1 0-1.5h.948c.632 0 1.144-.512 1.144-1.145v-1.894c0-.633-.512-1.145-1.144-1.145h-.948a.75.75 0 0 1-.75-.75M2.553 6.316a3.59 3.59 0 0 1 3.592-3.592h9.421a3.592 3.592 0 0 1 0 7.184H6.145a3.59 3.59 0 0 1-3.592-3.592m3.592-2.092a2.092 2.092 0 1 0 0 4.184h9.421a2.092 2.092 0 0 0 0-4.184z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.172 6.315a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 0 1.5h-.002a.75.75 0 0 1-.75-.75M11.092 6.315a.75.75 0 0 1 .75-.75h1.952a.75.75 0 0 1 0 1.5h-1.952a.75.75 0 0 1-.75-.75M2.553 12a3.59 3.59 0 0 1 3.592-3.592h9.421a3.592 3.592 0 0 1 0 7.184H6.145A3.59 3.59 0 0 1 2.553 12m3.592-2.092a2.092 2.092 0 0 0 0 4.184h9.421a2.092 2.092 0 1 0 0-4.184z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.172 12a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 0 1.5h-.002a.75.75 0 0 1-.75-.75M11.092 12a.75.75 0 0 1 .75-.75h1.952a.75.75 0 0 1 0 1.5h-1.952a.75.75 0 0 1-.75-.75M2.553 17.685a3.59 3.59 0 0 1 3.592-3.592h9.421a3.592 3.592 0 0 1 0 7.184H6.145a3.59 3.59 0 0 1-3.592-3.592m3.592-2.092a2.092 2.092 0 1 0 0 4.184h9.421a2.092 2.092 0 0 0 0-4.184z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.172 17.685a.75.75 0 0 1 .75-.75h.002a.75.75 0 0 1 0 1.5h-.002a.75.75 0 0 1-.75-.75M11.092 17.685a.75.75 0 0 1 .75-.75h1.952a.75.75 0 0 1 0 1.5h-1.952a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystServerConnectedOutline;
