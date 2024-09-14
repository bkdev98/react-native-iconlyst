import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSofa1Light = ({
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
      d="m15.701 18.953.492 1.523M8.57 18.953l-.49 1.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.994 10.62a2.124 2.124 0 0 0-2.117 2.118v.84c0 .582-.472 1.054-1.055 1.054H8.185a1.055 1.055 0 0 1-1.054-1.055v-.836a2.126 2.126 0 0 0-2.12-2.12 2.005 2.005 0 0 0-2.006 2.004v.004q-.027 1.294.094 2.582a3.63 3.63 0 0 0 3.35 3.302c.83.13 4.158.13 5.545.13 1.388 0 5.076-.029 5.558-.132a3.625 3.625 0 0 0 3.34-3.3q.121-1.28.106-2.566a2.007 2.007 0 0 0-1.988-2.024z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M5.107 10.7c-.033-1.187.01-2.377.13-3.56a3.69 3.69 0 0 1 3.359-3.406 28 28 0 0 1 6.86 0 3.75 3.75 0 0 1 3.363 3.406c.134 1.182.179 2.373.135 3.56"
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
export default IconlystSofa1Light;
