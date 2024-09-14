import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperDownload2Bulksharp = ({
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
      d="M14.54 8.48V3.82l4.47 4.66zm.49-6.091H4.08v19.5h16.34V8.009z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13.265 16.19h.75v-1.5h-.75c-.667 0-1.302.22-1.837.588V9.432h-1.5v5.846a3.25 3.25 0 0 0-1.837-.587h-.75v1.5h.75c.961 0 1.837.876 1.837 1.837v.75h1.5v-.75c0-.961.876-1.837 1.837-1.837"
    />
  </Svg>
);
export default IconlystPaperDownload2Bulksharp;
