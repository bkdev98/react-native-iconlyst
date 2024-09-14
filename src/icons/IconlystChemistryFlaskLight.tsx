import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChemistryFlaskLight = ({
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
      d="M20.199 9.635 10.041 19.793a4.133 4.133 0 0 1-5.83 0A4.16 4.16 0 0 1 3 16.877c0-1.06.409-2.113 1.21-2.915L14.369 3.805M13.566 3.004 21 10.437M10.389 16.488l1.478 1.479M12.201 13.242l2.194 2.194"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.387 6.79c.302.92 1.17 2.02 3.344 2.87 1.778.703 2.681 1.567 3.113 2.358"
    />
  </Svg>
);
export default IconlystChemistryFlaskLight;
