import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownSideOutline = ({
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
      d="M4.148 3.737c1.05-.978 2.5-1.487 4.128-1.487h7.948c1.627 0 3.078.509 4.128 1.487C21.41 4.721 22 6.124 22 7.784v8.434c0 1.66-.59 3.062-1.648 4.045-1.05.979-2.501 1.487-4.128 1.487H8.276c-1.628 0-3.078-.511-4.129-1.49-1.056-.985-1.647-2.387-1.647-4.042V7.783c0-1.66.59-3.062 1.648-4.046M5.17 4.835C4.45 5.505 4 6.495 4 7.783v8.435c0 1.284.45 2.273 1.17 2.945.727.677 1.79 1.087 3.106 1.087h7.948c1.317 0 2.38-.409 3.106-1.084.72-.67 1.17-1.66 1.17-2.948V7.784c0-1.29-.45-2.278-1.17-2.949-.726-.676-1.789-1.085-3.106-1.085H8.276c-1.317 0-2.38.409-3.106 1.085"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.5 15.457a.75.75 0 0 1 .75-.75h18a.75.75 0 0 1 0 1.5h-18a.75.75 0 0 1-.75-.75M9.136 7.802a.75.75 0 0 1 1.06.04l2.054 2.211 2.054-2.212a.75.75 0 0 1 1.1 1.02L12.8 11.667a.75.75 0 0 1-1.1 0L9.098 8.862a.75.75 0 0 1 .04-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownSideOutline;
