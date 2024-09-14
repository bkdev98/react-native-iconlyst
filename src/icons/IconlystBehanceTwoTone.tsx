import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBehanceTwoTone = ({
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
      d="M3.861 11.95h3.976m0 0a2.735 2.735 0 1 0 0-5.47h-4.29A.547.547 0 0 0 3 7.025v9.85a.55.55 0 0 0 .548.546h4.289a2.734 2.734 0 1 0 0-5.47"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.395 6.516h4.104M13.89 13.626h6.768a.34.34 0 0 0 .341-.34v-.06a3.553 3.553 0 0 0-7.108 0zm0 0v.195a3.699 3.699 0 0 0 6.302 2.625"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystBehanceTwoTone;
