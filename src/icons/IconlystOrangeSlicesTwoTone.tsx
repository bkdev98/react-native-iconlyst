import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOrangeSlicesTwoTone = ({
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
      d="M20.644 11.464a.944.944 0 0 0-1.36-.514l-8.953 5.17a.944.944 0 0 0-.234 1.435 6.2 6.2 0 0 0 7.806 1.343 6.195 6.195 0 0 0 2.74-7.434M3.356 4.912a.944.944 0 0 1 1.36-.513l8.953 5.17a.944.944 0 0 1 .234 1.434 6.2 6.2 0 0 1-7.806 1.344 6.195 6.195 0 0 1-2.74-7.435"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="m12.984 19.446 1.871-5.938 5.943 1.592M14.855 13.508l3.098 5.358M11.016 12.894 9.145 6.956 3.202 8.55M9.145 6.956l-3.098 5.358" />
    </G>
  </Svg>
);
export default IconlystOrangeSlicesTwoTone;
