import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHDROutline = ({
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
      d="M2.798 4.858c.86-.923 2.084-1.436 3.519-1.436h11.866c1.439 0 2.662.513 3.523 1.437C22.56 5.776 23 7.039 23 8.445v7.103c0 1.407-.44 2.67-1.295 3.588-.86.924-2.084 1.437-3.523 1.437H6.317c-1.439 0-2.662-.513-3.523-1.437-.854-.918-1.294-2.18-1.294-3.588V8.445c0-1.407.442-2.67 1.298-3.587m1.097 1.023C3.34 6.475 3 7.35 3 8.445v7.103c0 1.098.34 1.972.892 2.566.547.587 1.357.959 2.425.959h11.865c1.069 0 1.879-.372 2.426-.96.552-.593.892-1.467.892-2.565V8.445c0-1.097-.34-1.971-.892-2.564-.547-.587-1.357-.96-2.425-.96H6.317c-1.064 0-1.874.372-2.422.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.045 8.684a.75.75 0 0 1 .75.75v5.12a.75.75 0 0 1-1.5 0v-5.12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.295 11.996a.75.75 0 0 1 .75-.75h3.238a.75.75 0 0 1 0 1.5H5.045a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.283 8.684a.75.75 0 0 1 .75.75v5.12a.75.75 0 0 1-1.5 0v-5.12a.75.75 0 0 1 .75-.75M9.97 9.434a.75.75 0 0 1 .75-.75h.853a3.31 3.31 0 1 1 0 6.62h-.853a.75.75 0 0 1-.75-.75zm1.5.75v3.62h.103a1.812 1.812 0 0 0 0-3.62zM15.443 9.469a.75.75 0 0 1 .75-.75h1.746a2.268 2.268 0 1 1 0 4.535h-.996v1.274a.75.75 0 0 1-1.5 0zm1.5 2.285h.996a.767.767 0 1 0 0-1.535h-.996z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.406 11.863a.75.75 0 0 1 1.03.252l1.227 2.023a.75.75 0 0 1-1.282.778l-1.227-2.023a.75.75 0 0 1 .252-1.03"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHDROutline;
