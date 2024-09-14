import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeShopLight = ({
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
      d="M13.488 12.115h4.063c1.42 0 2.304 1.002 2.304 2.421v3.829c0 1.418-.885 2.42-2.304 2.42h-4.063c-1.42 0-2.303-1.002-2.303-2.42v-3.829c0-1.419.887-2.42 2.303-2.42"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.836 15.254c.147.792.838 1.39 1.684 1.39a1.71 1.71 0 0 0 1.684-1.39M21 9.685l-7.526-5.958a2.38 2.38 0 0 0-2.948 0L3 9.685M19.504 10.027V8.504"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.498 8.504v8.675a3.064 3.064 0 0 0 3.064 3.064h1.877"
    />
  </Svg>
);
export default IconlystHomeShopLight;
