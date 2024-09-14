import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletCircleBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.485 11.805a3.763 3.763 0 0 1 0 7.525h-5.164M7.711 11.023a3.762 3.762 0 1 1 0-7.525"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.032 7.887a4.841 4.841 0 1 1-6.846 6.846 4.841 4.841 0 0 1 6.846-6.846"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.602 13.266 1.266-1.957h-2.516l1.264-1.957M19.249 3.5h-6.77M4.987 21.498a2.17 2.17 0 0 1 2.17-2.17h1.63"
    />
  </Svg>
);
export default IconlystPowerOutletCircleBroken;
