import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownload2Boldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13 8.814v5.29c.98-1.05 2.37-1.73 3.85-1.73h.75v1.5h-.75c-2.02 0-3.85 1.83-3.85 3.85v.75h-1.5v-.75c0-2.02-1.83-3.85-3.85-3.85H6.9v-1.5h.75c1.48 0 2.87.68 3.85 1.73v-5.29h-9v12.43H22V8.814zM11.5 8.814H13v-5.78h-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDownload2Boldsharp;
