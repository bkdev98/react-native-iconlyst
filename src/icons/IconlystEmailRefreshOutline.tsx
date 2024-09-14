import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailRefreshOutline = ({
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
      d="M7.636 20.315a4.87 4.87 0 0 1-3.517-1.43A5.75 5.75 0 0 1 2.5 14.758V8.822a5.25 5.25 0 0 1 5.15-5.565h8.486a5.25 5.25 0 0 1 5.15 5.565v1.614a.75.75 0 1 1-1.5 0V8.822c0-2.356-1.535-4.065-3.65-4.065H7.65C5.535 4.757 4 6.466 4 8.822v5.936a4.27 4.27 0 0 0 1.177 3.065 3.4 3.4 0 0 0 2.46.992h4.178a.75.75 0 0 1 0 1.5h-4.18"
    />
    <Path
      fill={props.color}
      d="M18.196 20.744a3.8 3.8 0 0 1-1.968-7.058.75.75 0 0 1 .777 1.283 2.3 2.3 0 1 0 2.226-.087.751.751 0 0 1 .391-1.42.8.8 0 0 1 .283.08 3.8 3.8 0 0 1-1.71 7.2z"
    />
    <Path
      fill={props.color}
      d="M19.57 16.653a.75.75 0 0 1-.75-.75v-1.69a.75.75 0 0 1 .75-.75h1.681a.75.75 0 1 1 0 1.5h-.932v.94a.75.75 0 0 1-.75.75M11.916 13.37c-.617 0-1.217-.21-1.7-.595L6.338 9.648A.75.75 0 0 1 7.28 8.48l3.873 3.123a1.234 1.234 0 0 0 1.536 0l3.833-3.117a.75.75 0 1 1 .947 1.164l-3.84 3.123a2.75 2.75 0 0 1-1.712.597"
    />
  </Svg>
);
export default IconlystEmailRefreshOutline;
