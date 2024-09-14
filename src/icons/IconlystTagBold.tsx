import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTagBold = ({
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
      d="M8.337 7.451h-.004a.85.85 0 0 0-.628 1.447.85.85 0 0 0 .598.256h.002a.86.86 0 0 0 .857-.836c0-.469-.376-.865-.825-.867"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.661 8.325a2.353 2.353 0 0 1-2.356 2.329H8.3a2.33 2.33 0 0 1-1.66-.7 2.31 2.31 0 0 1-.682-1.65A2.345 2.345 0 0 1 8.331 5.95h.011c1.283.005 2.323 1.069 2.32 2.373zm9.78 1.918q-3.06-3.069-6.128-6.13c-1.06-1.06-2.355-1.599-3.843-1.6h-.318c-3.336-.012-4.534.01-4.762.05-1.633.281-2.868 1.746-2.87 3.408l-.006.654c-.01 1.28-.03 3.665.04 4.427.113 1.228.622 2.305 1.511 3.2 2.056 2.068 4.12 4.126 6.183 6.184a3.54 3.54 0 0 0 2.51 1.055c.891 0 1.781-.344 2.474-1.032a807 807 0 0 0 5.234-5.232c1.383-1.396 1.373-3.587-.025-4.985"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.337 7.451h-.004a.85.85 0 0 0-.628 1.447.85.85 0 0 0 .598.256h.002a.86.86 0 0 0 .857-.836c0-.469-.376-.865-.825-.867"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.661 8.325a2.353 2.353 0 0 1-2.356 2.329H8.3a2.33 2.33 0 0 1-1.66-.7 2.31 2.31 0 0 1-.682-1.65A2.345 2.345 0 0 1 8.331 5.95h.011c1.283.005 2.323 1.069 2.32 2.373zm9.78 1.918q-3.06-3.069-6.128-6.13c-1.06-1.06-2.355-1.599-3.843-1.6h-.318c-3.336-.012-4.534.01-4.762.05-1.633.281-2.868 1.746-2.87 3.408l-.006.654c-.01 1.28-.03 3.665.04 4.427.113 1.228.622 2.305 1.511 3.2 2.056 2.068 4.12 4.126 6.183 6.184a3.54 3.54 0 0 0 2.51 1.055c.891 0 1.781-.344 2.474-1.032a807 807 0 0 0 5.234-5.232c1.383-1.396 1.373-3.587-.025-4.985"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTagBold;
