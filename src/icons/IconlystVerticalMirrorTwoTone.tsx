import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVerticalMirrorTwoTone = ({
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
      d="M8.018 11.464 4.622 8.74a.688.688 0 0 0-1.118.537v5.447c0 .576.667.898 1.118.537l3.396-2.724a.688.688 0 0 0 0-1.073"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.502 8.333v2m0 3.334v2m0 3.333v2m0-18v2"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.982 12.537 3.396 2.724a.688.688 0 0 0 1.118-.537V9.277a.688.688 0 0 0-1.118-.537l-3.396 2.724a.688.688 0 0 0 0 1.073"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVerticalMirrorTwoTone;
