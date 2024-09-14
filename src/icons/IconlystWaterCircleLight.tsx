import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWaterCircleLight = ({
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
    <Circle
      cx={12.114}
      cy={12}
      r={9}
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.277 11.638c.017.85.813 1.539 1.784 1.537.97-.002 1.74-.692 1.724-1.544-.032-1.65-1.816-3.29-1.816-3.29s-1.725 1.646-1.692 3.297M13.977 10.73c.017.83.795 1.503 1.742 1.5.948-.001 1.7-.675 1.685-1.507-.032-1.612-1.774-3.214-1.774-3.214s-1.685 1.608-1.653 3.22M10.512 16.144c.017.84.803 1.52 1.762 1.518.958-.002 1.718-.683 1.702-1.524-.032-1.63-1.793-3.25-1.793-3.25s-1.703 1.627-1.67 3.256"
    />
  </Svg>
);
export default IconlystWaterCircleLight;
