import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperAddBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.283 11.635q.16 0 .32.009a.31.31 0 0 0 .329-.305V7.63c0-2.303-1.482-3.85-3.688-3.85H5.62c-2.206 0-3.688 1.547-3.688 3.85v7.4c0 2.302 1.482 3.85 3.689 3.85h7.29a.303.303 0 0 0 .301-.305q0-.102.005-.205a7.074 7.074 0 0 1 7.066-6.735"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m21.321 16.495-1.606-.007v-1.603a.75.75 0 0 0-1.5 0v1.6h-1.603a.75.75 0 0 0 0 1.5h1.604l.001 1.611a.75.75 0 1 0 1.5-.002v-1.606l1.598.007h.003a.75.75 0 0 0 .003-1.5M11.43 14.37a3.04 3.04 0 0 1-3.037-3.04 3.04 3.04 0 0 1 3.038-3.04 3.04 3.04 0 0 1 3.038 3.04 3.04 3.04 0 0 1-3.038 3.04m-1.537-3.04c0-.85.69-1.54 1.538-1.54a1.54 1.54 0 0 1 0 3.08 1.54 1.54 0 0 1-1.538-1.54"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M7.049 8.53H5.646a.75.75 0 0 1 0-1.5h1.403a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystMoneyPaperAddBulk;
