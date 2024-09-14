import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerTransferBroken = ({
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
      d="M8.026 3C5.081 3 3 4.834 3 7.782v8.434C3 19.165 5.081 21 8.026 21h3.083M21 11.352v-3.57C21 4.842 18.919 3 15.974 3H12M7.363 16.135h.523M7.363 7.865h.523m4.216 0h4.534M12.22 12H3.023M13.186 16.432l2.193-1.588V21M21 19.412l-2.193 1.587v-6.155"
    />
  </Svg>
);
export default IconlystServerTransferBroken;
