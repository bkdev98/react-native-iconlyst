import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSofa1Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.701 18.953.491 1.523M8.57 18.953l-.49 1.523M12.004 14.632h3.818c.583 0 1.055-.472 1.055-1.055v-.84a2.124 2.124 0 0 1 2.117-2.116h.016a2.007 2.007 0 0 1 1.988 2.024q.016 1.287-.107 2.566a3.625 3.625 0 0 1-3.34 3.3c-.48.104-4.17.132-5.557.132s-4.715 0-5.546-.13a3.63 3.63 0 0 1-3.35-3.302q-.12-1.288-.093-2.582v-.004c0-1.107.898-2.004 2.005-2.004 1.17.003 2.118.95 2.12 2.12v.836c0 .583.473 1.055 1.055 1.055h.673"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M5.106 10.7c-.033-1.187.011-2.377.13-3.56a3.69 3.69 0 0 1 3.36-3.406 28 28 0 0 1 6.859 0 3.75 3.75 0 0 1 3.363 3.406"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.01 7.244H10M10 10.244h-.01M14.01 7.244H14M14.01 10.244H14"
    />
  </Svg>
);
export default IconlystSofa1Broken;
