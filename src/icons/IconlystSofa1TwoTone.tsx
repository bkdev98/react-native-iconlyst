import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSofa1TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.2 18.953.492 1.523M9.07 18.953l-.491 1.523"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.494 10.62a2.124 2.124 0 0 0-2.117 2.118v.84c0 .582-.472 1.054-1.055 1.054H8.685a1.055 1.055 0 0 1-1.054-1.055v-.836a2.126 2.126 0 0 0-2.12-2.12 2.005 2.005 0 0 0-2.006 2.004v.004q-.027 1.294.094 2.582a3.63 3.63 0 0 0 3.35 3.302c.83.13 4.158.13 5.545.13 1.388 0 5.076-.029 5.558-.132a3.625 3.625 0 0 0 3.34-3.3q.121-1.28.106-2.566a2.007 2.007 0 0 0-1.988-2.024z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M5.606 10.7c-.033-1.187.011-2.377.13-3.56a3.69 3.69 0 0 1 3.36-3.406 28 28 0 0 1 6.859 0 3.75 3.75 0 0 1 3.363 3.406c.135 1.182.18 2.373.136 3.56"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.51 7.244h-.01M10.5 10.244h-.01M14.51 7.244h-.01M14.51 10.244h-.01"
    />
  </Svg>
);
export default IconlystSofa1TwoTone;
