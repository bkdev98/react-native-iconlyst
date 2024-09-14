import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStackoverflowTwoTone = ({
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
      d="M7.533 17.3h8.186M7.695 13.3l7.982 1.82M9.066 9.52l7.496 3.29M11.417 5.96l6.338 5.182M14.432 3l4.954 6.516"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.832 15.375v2.732c0 2.165-1.348 2.893-3.516 2.893H8.128c-2.167 0-3.515-.728-3.515-2.893v-2.732"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStackoverflowTwoTone;
