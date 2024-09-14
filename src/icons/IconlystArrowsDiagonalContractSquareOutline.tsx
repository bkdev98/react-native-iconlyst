import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsDiagonalContractSquareOutline = ({
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
      d="M4.92 4.835c-.72.67-1.17 1.66-1.17 2.948v8.435c0 1.289.45 2.277 1.17 2.948.726.675 1.789 1.084 3.106 1.084h7.948c1.316 0 2.38-.41 3.106-1.088.72-.672 1.17-1.66 1.17-2.944V7.783c0-1.289-.45-2.278-1.17-2.948-.726-.676-1.789-1.085-3.106-1.085H8.026c-1.317 0-2.38.409-3.106 1.085M3.898 3.737c1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487 1.057.984 1.648 2.387 1.648 4.046v8.435c0 1.655-.591 3.057-1.647 4.041-1.05.98-2.501 1.491-4.13 1.491H8.027c-1.627 0-3.077-.508-4.128-1.487-1.057-.983-1.648-2.386-1.648-4.045V7.783c0-1.66.59-3.062 1.648-4.046"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.01 6.1a.75.75 0 0 1 .75.75v2.342l2.095-2.094a.75.75 0 0 1 1.061 1.06l-2.095 2.095h2.344a.75.75 0 0 1 0 1.5H13.01a.75.75 0 0 1-.75-.75V6.849a.75.75 0 0 1 .75-.75M6.085 12.997a.75.75 0 0 1 .75-.75h4.154a.75.75 0 0 1 .75.75v4.154a.75.75 0 0 1-1.5 0v-2.343l-2.094 2.094a.75.75 0 1 1-1.061-1.06l2.095-2.095H6.835a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsDiagonalContractSquareOutline;
