import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerRack4TwoTone = ({
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
      d="M6.437 21h12.126a2.91 2.91 0 0 0 2.91-2.91v-1.568a2.91 2.91 0 0 0-2.91-2.91H6.437a2.91 2.91 0 0 0-2.91 2.91v1.568A2.91 2.91 0 0 0 6.437 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.89 17.306h.523m5.19 0h3.56"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.437 10.387h12.126a2.91 2.91 0 0 0 2.91-2.91V5.91A2.91 2.91 0 0 0 18.563 3H6.437a2.91 2.91 0 0 0-2.91 2.91v1.567a2.91 2.91 0 0 0 2.91 2.91"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.89 6.693h.523m5.19 0h3.56"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystServerRack4TwoTone;
