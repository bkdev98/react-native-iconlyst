import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapMoveOutline = ({
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
      d="M9.923 5.21a.794.794 0 0 0-.794.795v8.858a.75.75 0 0 1-1.368.425l-1.104-1.602a.94.94 0 0 0-1.109-.344c-.464.178-.678.66-.526 1.08.537 1.482 1.387 3.129 2.468 4.473.684.85 2.215 1.36 3.981 1.357 1.756-.004 3.383-.516 4.164-1.296.651-.651 1.197-1.687 1.472-2.857.273-1.168.26-2.391-.118-3.409-.313-.846-1.029-1.302-2.08-1.567-.793-.2-1.647-.262-2.503-.324q-.476-.033-.949-.076a.75.75 0 0 1-.679-.735l-.06-3.995a.794.794 0 0 0-.795-.782m-2.294.795a2.294 2.294 0 0 1 4.588-.035l.05 3.314.133.01c.889.063 1.943.14 2.876.375 1.273.32 2.56.988 3.12 2.5.502 1.357.495 2.89.17 4.273-.323 1.378-.98 2.684-1.87 3.574-1.186 1.186-3.289 1.732-5.222 1.736-1.922.003-4.038-.531-5.153-1.918-1.203-1.495-2.127-3.294-2.71-4.9-.447-1.236.22-2.54 1.4-2.992a2.44 2.44 0 0 1 2.618.573zM15.804 4.556a.75.75 0 0 1 0 1.06l-.304.304.304.304a.75.75 0 0 1-1.06 1.06l-.835-.834a.75.75 0 0 1 0-1.06l.834-.834a.75.75 0 0 1 1.06 0M15.993 7.474a.75.75 0 0 1 1.06 0l.304.303.304-.303a.75.75 0 1 1 1.06 1.06l-.833.834a.75.75 0 0 1-1.061 0l-.834-.834a.75.75 0 0 1 0-1.06M16.827 2.47a.75.75 0 0 1 1.06 0l.835.834a.75.75 0 0 1-1.06 1.06l-.305-.303-.303.303a.75.75 0 0 1-1.06-1.06zM18.913 4.556a.75.75 0 0 1 1.06 0l.835.834a.75.75 0 0 1 0 1.06l-.834.834a.75.75 0 0 1-1.061-1.06l.304-.304-.304-.304a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.69 5.918a.75.75 0 0 1 .75-.75h5.837a.75.75 0 0 1 0 1.5H14.44a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.357 2.25a.75.75 0 0 1 .75.75v5.838a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapMoveOutline;
