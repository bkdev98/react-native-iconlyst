import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeShopBroken = ({
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
      d="M18.051 20.785c1.42 0 2.304-1.002 2.304-2.42v-3.83c0-1.418-.884-2.42-2.304-2.42h-4.063c-1.416 0-2.303 1.002-2.303 2.42v3.83c0 1.418.882 2.42 2.303 2.42h1.039"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.336 15.254c.147.792.838 1.39 1.684 1.39a1.71 1.71 0 0 0 1.684-1.39M21.5 9.685l-7.526-5.958a2.38 2.38 0 0 0-2.948 0L3.5 9.685M20.004 10.027V8.504M4.998 8.504v4.337M9.939 20.242H8.062a3.064 3.064 0 0 1-3.064-3.064v-1.567"
    />
  </Svg>
);
export default IconlystHomeShopBroken;
