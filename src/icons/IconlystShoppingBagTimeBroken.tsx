import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingBagTimeBroken = ({
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
      d="M10.912 20.036H7.53c-2.793 0-4.53-1.972-4.53-4.762v-3.765M20.054 10.667V7.746c0-2.79-1.739-4.762-4.532-4.762H7.53C4.745 2.984 3 4.956 3 7.746"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.919 8.494a3.392 3.392 0 0 1-6.782 0M21 17.315a3.703 3.703 0 1 0-1.556 3.018"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.446 18.279-1.17-.7v-1.505"
    />
  </Svg>
);
export default IconlystShoppingBagTimeBroken;
