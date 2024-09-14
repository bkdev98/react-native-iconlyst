import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieLight = ({
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
      d="M8.316 3.563h9.034c2.763 0 4.483 1.95 4.483 4.711v7.45c0 2.76-1.72 4.712-4.484 4.712H8.316c-2.764 0-4.482-1.951-4.482-4.712v-7.45c0-2.761 1.727-4.711 4.482-4.711M3.834 8.5h18M9.079 8.496l-2.29-4.702m6.731 4.702-2.417-4.93m6.868 4.93-2.417-4.93"
    />
  </Svg>
);
export default IconlystMovieLight;
