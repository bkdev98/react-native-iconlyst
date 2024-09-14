import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountTagBold = ({
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
      d="M15.081 12.873a.976.976 0 0 1 0-1.95.976.976 0 0 1 .001 1.95m-2.429 2.293a.75.75 0 0 1-1.5 0V8.628a.75.75 0 0 1 1.5 0zM8.72 12.873a.976.976 0 0 1 0-1.95c.537 0 .975.437.975.974a.976.976 0 0 1-.975.976m11.723-2.631a5053 5053 0 0 0-6.129-6.13c-1.062-1.059-2.355-1.597-3.843-1.598h-.318c-3.332-.014-4.534.008-4.76.048-1.635.282-2.87 1.747-2.873 3.408l-.005.654c-.01 1.281-.03 3.665.04 4.427.113 1.228.622 2.305 1.511 3.201 2.056 2.068 4.12 4.126 6.183 6.183a3.54 3.54 0 0 0 2.51 1.055c.891 0 1.781-.344 2.475-1.031a807 807 0 0 0 5.232-5.232c1.384-1.397 1.374-3.586-.023-4.985"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.081 12.873a.976.976 0 0 1 0-1.95.976.976 0 0 1 .001 1.95m-2.429 2.293a.75.75 0 0 1-1.5 0V8.628a.75.75 0 0 1 1.5 0zM8.72 12.873a.976.976 0 0 1 0-1.95c.537 0 .975.437.975.974a.976.976 0 0 1-.975.976m11.723-2.631a5053 5053 0 0 0-6.129-6.13c-1.062-1.059-2.355-1.597-3.843-1.598h-.318c-3.332-.014-4.534.008-4.76.048-1.635.282-2.87 1.747-2.873 3.408l-.005.654c-.01 1.281-.03 3.665.04 4.427.113 1.228.622 2.305 1.511 3.201 2.056 2.068 4.12 4.126 6.183 6.183a3.54 3.54 0 0 0 2.51 1.055c.891 0 1.781-.344 2.475-1.031a807 807 0 0 0 5.232-5.232c1.384-1.397 1.374-3.586-.023-4.985"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountTagBold;
