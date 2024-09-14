import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSatelliteBroken = ({
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
      d="m8.497 14.695-2.538 4.96A.924.924 0 0 0 6.782 21h6.134a.925.925 0 0 0 .867-1.247l-.287-.771"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.163 7.466a7.5 7.5 0 0 1 1.37-2.953c.336-.439.975-.435 1.366-.045l9.233 9.234c.39.39.394 1.03-.045 1.365a7.53 7.53 0 0 1-9.895-.658 7.53 7.53 0 0 1-2.03-3.705M14.53 5.672c1.239.305 2.12 1.218 2.378 2.38M15.64 2.988a5.36 5.36 0 0 1 4.005 3.943"
    />
  </Svg>
);
export default IconlystSatelliteBroken;
