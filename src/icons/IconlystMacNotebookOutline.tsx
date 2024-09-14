import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMacNotebookOutline = ({
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
      d="M2.5 16.417a1.3 1.3 0 0 1 1.3-1.3h16.9a1.3 1.3 0 0 1 1.3 1.3v.507a3.18 3.18 0 0 1-3.178 3.178H5.679A3.18 3.18 0 0 1 2.5 16.924zm1.5.2v.307a1.68 1.68 0 0 0 1.679 1.678h13.143a1.68 1.68 0 0 0 1.678-1.678v-.307z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.828 7.66A3.76 3.76 0 0 1 7.59 3.899h9.317a3.76 3.76 0 0 1 3.761 3.763v8.206a.75.75 0 0 1-1.5 0V7.66a2.26 2.26 0 0 0-2.261-2.263H7.59a2.26 2.26 0 0 0-2.262 2.263v8.206a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.824 7.676a.75.75 0 0 1 .75-.75h1.35a.75.75 0 0 1 0 1.5h-1.35a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMacNotebookOutline;
