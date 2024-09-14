import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWavingHandLight = ({
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
      d="m15.072 10.605-.591-1.27a2.117 2.117 0 0 1 1.024-2.812 1.405 1.405 0 0 1 1.867.673c.517 1.098 1.217 2.6 1.451 3.178.735 1.81 1.152 3.667.41 5.705a7.02 7.02 0 0 1-12.959.564L3.16 9.959a1.775 1.775 0 0 1 .851-2.334 1.774 1.774 0 0 1 2.333.849l1.633 3.5"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.344 8.474 5.16 5.934a1.77 1.77 0 0 1 .877-2.265 1.77 1.77 0 0 1 2.3.78l2.521 5.409"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.7 9.809-2.595-5.566a1.77 1.77 0 0 0-2.3-.781 1.773 1.773 0 0 0-.889 2.233M15.072 10.606c-1.713.796-2.504 2.932-1.694 4.66M5.631 20.533c-1.573-1.049-1.963-2.386-2.176-3.146M21 7.827c.007-2.36-1.777-3.23-1.777-3.23"
    />
  </Svg>
);
export default IconlystWavingHandLight;
