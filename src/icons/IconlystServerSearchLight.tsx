import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystServerSearchLight = ({
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
      d="M21 11.352v-3.57C21 4.842 18.918 3 15.973 3H8.026C5.081 3 3 4.834 3 7.782v8.433C3 19.165 5.081 21 8.026 21h3.082M7.363 16.135h.523M7.363 7.864h.523m4.216 0h4.534"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.52 19.523 21 21m-3.48-6.57a2.94 2.94 0 1 1 0 5.88 2.94 2.94 0 0 1 0-5.88M12.22 12H3.023"
    />
  </Svg>
);
export default IconlystServerSearchLight;
