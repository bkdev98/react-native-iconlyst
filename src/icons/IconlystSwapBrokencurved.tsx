import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapBrokencurved = ({
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
      d="M17.213 9.773V6.821M17.213 19.439v-6.493M21.283 15.34s-2.17 4.1-4.07 4.1c-1.91 0-4.08-4.1-4.08-4.1M7.297 14.227v2.952M7.297 4.561v6.493M11.367 8.66s-2.17-4.1-4.07-4.1c-1.91 0-4.08 4.1-4.08 4.1"
    />
  </Svg>
);
export default IconlystSwapBrokencurved;
