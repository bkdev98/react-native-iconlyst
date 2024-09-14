import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitor2Light = ({
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
      d="M16.97 3.283H7.029A4.03 4.03 0 0 0 3 7.313v5.456a4.03 4.03 0 0 0 4.028 4.029h9.943A4.03 4.03 0 0 0 21 12.768V7.313a4.03 4.03 0 0 0-4.03-4.029"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.055 20.717h9.888M9.883 16.8l-.637 3.918M14.115 16.8l.637 3.918"
    />
  </Svg>
);
export default IconlystMonitor2Light;
