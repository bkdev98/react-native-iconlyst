import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystExpandResizeOutline = ({
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
      d="M5.01 14.573a.75.75 0 0 1 .748.752l-.006 2.672c0 .138.112.25.25.25l2.673-.005a.75.75 0 0 1 .003 1.5l-2.673.005a1.75 1.75 0 0 1-1.753-1.754l.006-2.672a.75.75 0 0 1 .751-.748"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.532 14.466a.75.75 0 0 1 0 1.06L6.028 19.03a.75.75 0 0 1-1.06-1.06l3.504-3.504a.75.75 0 0 1 1.06 0M7.004 6.754a.25.25 0 0 0-.25.25l.006 2.673a.75.75 0 1 1-1.5.003l-.006-2.672a1.75 1.75 0 0 1 1.754-1.754l2.672.006a.75.75 0 0 1-.003 1.5zM17.99 13.574a.75.75 0 0 1 .751.749l.006 2.672a1.75 1.75 0 0 1-1.754 1.754l-2.672-.006a.75.75 0 1 1 .003-1.5l2.673.006a.25.25 0 0 0 .25-.25l-.006-2.673a.75.75 0 0 1 .749-.752M18.246 6.005a.25.25 0 0 0-.25-.251l-2.674.005a.75.75 0 0 1-.003-1.5l2.673-.005a1.75 1.75 0 0 1 1.754 1.754l-.007 2.672a.75.75 0 0 1-1.5-.003z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.03 4.97a.75.75 0 0 1 0 1.06l-3.504 3.504a.75.75 0 1 1-1.06-1.06L17.97 4.97a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystExpandResizeOutline;
