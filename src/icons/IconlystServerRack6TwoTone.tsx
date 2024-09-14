import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack6TwoTone = ({
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
      d="M7.221 21H17.78a3.694 3.694 0 0 0 0-7.388H7.22a3.694 3.694 0 0 0 0 7.388M7.221 10.387H17.78a3.694 3.694 0 0 0 0-7.387H7.22a3.693 3.693 0 1 0 0 7.387"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.89 17.306h.523M7.89 6.693h.523M13.604 17.306h3.56M13.604 6.693h3.56"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystServerRack6TwoTone;
