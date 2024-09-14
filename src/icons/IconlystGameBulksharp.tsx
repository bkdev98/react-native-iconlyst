import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameBulksharp = ({
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
      d="M13 7.328h3.012c4.09 0 7.416 3.327 7.416 7.416s-3.326 7.416-7.416 7.416H8.488c-4.09 0-7.416-3.327-7.416-7.416s3.326-7.416 7.416-7.416H13"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M13 7.328V6.98c-.006-1.52-1.265-2.76-2.81-2.764H9.163a.57.57 0 0 1-.583-.556v-.75h-1.5v.75c0 1.133.935 2.056 2.083 2.056h1.026c.72.002 1.31.573 1.313 1.268v.344zM11.503 15.466h-1.86v1.823h-1.5v-1.823H6.28v-1.5h1.862v-1.824h1.5v1.824h1.86zM15.99 13.752h-1.604v-1.5h1.605zM17.757 17.234h-1.605v-1.5h1.604z"
    />
  </Svg>
);
export default IconlystGameBulksharp;
