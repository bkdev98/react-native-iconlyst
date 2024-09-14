import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRollingBrushOutline = ({
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
      d="M11.303 15.12c-.633 0-1.145.512-1.145 1.144v2.842a1.144 1.144 0 1 0 2.289 0v-2.843c0-.632-.512-1.144-1.144-1.144m-2.645 1.144a2.644 2.644 0 1 1 5.289 0v2.842a2.644 2.644 0 1 1-5.289 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.184 5.842a.75.75 0 0 1 .75-.75 3.593 3.593 0 0 1 0 7.185h-3.79a2.09 2.09 0 0 0-2.091 2.091.75.75 0 0 1-1.5 0 3.59 3.59 0 0 1 3.591-3.591h3.79a2.092 2.092 0 0 0 0-4.185.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.567 3.75a2.092 2.092 0 0 0 0 4.184h8.526a2.092 2.092 0 0 0 0-4.184zM2.975 5.842A3.59 3.59 0 0 1 6.567 2.25h8.526a3.592 3.592 0 0 1 0 7.184H6.567a3.59 3.59 0 0 1-3.592-3.592"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRollingBrushOutline;
