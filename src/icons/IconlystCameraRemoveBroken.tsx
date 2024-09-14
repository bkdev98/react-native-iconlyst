import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraRemoveBroken = ({
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
      d="M18.987 3.804 3.38 20.315M19.93 7.354A3 3 0 0 1 21 9.659v5.644a4.107 4.107 0 0 1-4.106 4.106H8.526M3 9.66a3.06 3.06 0 0 1 3.065-3.055c.486-.02.953-.224 1.294-.584.175-.205.477-.7.74-1.178a2.24 2.24 0 0 1 1.955-1.157h3.912c.827 0 1.576.457 1.965 1.187.253.467.535.953.71 1.148a.5.5 0 0 0 .137.116M4.868 18.74A4.08 4.08 0 0 1 3 15.307v-2.822M9.257 14.096a3.1 3.1 0 0 1-.35-1.44A3.096 3.096 0 0 1 12 9.562c.457 0 .885.097 1.274.282"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.092 12.655a3.093 3.093 0 0 1-3.093 3.093"
    />
  </Svg>
);
export default IconlystCameraRemoveBroken;
