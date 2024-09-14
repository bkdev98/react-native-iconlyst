import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCameraRemoveTwoTone = ({
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
      d="M19.487 3.805 3.88 20.316"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.43 7.352a3 3 0 0 1 1.07 2.306V15.3a4.107 4.107 0 0 1-4.106 4.106H9.026"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.368 18.74A4.08 4.08 0 0 1 3.5 15.305V9.662a3.06 3.06 0 0 1 3.065-3.056c.486-.019.953-.223 1.294-.583.175-.205.477-.7.74-1.178a2.24 2.24 0 0 1 1.955-1.157h3.912c.827 0 1.576.457 1.965 1.187.253.467.535.953.71 1.148a.5.5 0 0 0 .137.116"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.757 14.097a3.1 3.1 0 0 1-.35-1.44A3.096 3.096 0 0 1 12.5 9.563c.458 0 .886.097 1.275.282"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.592 12.656a3.093 3.093 0 0 1-3.093 3.093"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCameraRemoveTwoTone;