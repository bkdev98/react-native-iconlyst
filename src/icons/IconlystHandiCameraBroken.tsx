import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandiCameraBroken = ({
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
      d="M12.66 19.506c2.136 0 3.466-1.508 3.466-3.642v-5.113c0-2.133-1.33-3.642-3.466-3.642H6.55c-2.13 0-3.465 1.509-3.465 3.642v5.113c0 2.134 1.328 3.642 3.465 3.642h3.055M7.075 4.492h2.91c.89 0 1.7.518 2.075 1.326l.596 1.29"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.12 14.797 3.053 2.508a1.162 1.162 0 0 0 1.9-.896v-2.58M16.12 11.175l3.065-2.51a1.163 1.163 0 0 1 1.898.9l-.002 1.71M11.95 11.266v-.048m0-.253a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5"
    />
  </Svg>
);
export default IconlystHandiCameraBroken;
