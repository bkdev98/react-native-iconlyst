import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmilingAddTwoTone = ({
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
      d="M13.797 3H8.282C5.342 3 3.5 5.081 3.5 8.026v7.947c0 2.945 1.834 5.026 4.782 5.026h8.433c2.95 0 4.784-2.081 4.784-5.026v-5.028"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.605 14.352c.72.937 1.78 1.521 2.958 1.521 1.177 0 2.238-.584 2.958-1.521M21.5 5.15h-4.297m2.148 2.154V3"
    />
  </Svg>
);
export default IconlystSmilingAddTwoTone;
