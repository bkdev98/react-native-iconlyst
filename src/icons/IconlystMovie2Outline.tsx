import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovie2Outline = ({
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
      d="M4.374 3.827C5.317 2.815 6.66 2.25 8.246 2.25h8.012c1.586 0 2.928.565 3.87 1.578.937 1.006 1.423 2.394 1.423 3.948v8.45c0 1.554-.488 2.941-1.426 3.947-.943 1.012-2.285 1.577-3.867 1.577H8.245c-1.585 0-2.928-.565-3.87-1.577-.938-1.006-1.424-2.394-1.424-3.948v-8.45c0-1.553.486-2.941 1.423-3.948M5.472 4.85c-.635.682-1.02 1.682-1.02 2.926v8.45c0 1.243.385 2.243 1.02 2.925.629.675 1.558 1.099 2.773 1.099h8.013c1.21 0 2.14-.423 2.77-1.1.635-.681 1.023-1.681 1.023-2.925v-8.45c0-1.244-.386-2.244-1.02-2.926-.63-.675-1.558-1.099-2.773-1.099H8.246c-1.215 0-2.145.424-2.774 1.1"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.513 13.871a.68.68 0 0 0-.681.68v1.317c0 .376.305.68.68.68h2.177a.68.68 0 0 0 .681-.68v-1.316a.68.68 0 0 0-.68-.68zm-2.181.68a2.18 2.18 0 0 1 2.18-2.18h2.177a2.18 2.18 0 0 1 2.181 2.18v1.317a2.18 2.18 0 0 1-2.18 2.18h-2.177a2.18 2.18 0 0 1-2.181-2.18zM9.273 2.25a.75.75 0 0 1 .75.75v4.476a.75.75 0 1 1-1.5 0V3a.75.75 0 0 1 .75-.75m5.954 0a.75.75 0 0 1 .75.75v4.476a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.957 7.477a.75.75 0 0 1 .75-.75h17.086a.75.75 0 0 1 0 1.5H3.707a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMovie2Outline;