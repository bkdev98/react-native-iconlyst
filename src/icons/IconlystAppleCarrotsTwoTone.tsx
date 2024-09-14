import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAppleCarrotsTwoTone = ({
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
      d="M6.933 9.343a2.44 2.44 0 0 0-1.347 1.838"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M9.713 17.834c-.637 0-1.754.72-3.071.44-.732-.093-3.679-2.465-3.642-7.25.3-5.04 3.855-4.602 4.797-4.337a6.96 6.96 0 0 0 3.831 0c.943-.265 4.76-.65 4.35 4.337" />
      <Path d="M9.425 6.937c0-1.546.658-3.099 2.622-3.48" />
    </G>
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M13.45 12.153c-1.364 1.364-4.911 7.093-3.82 8.184 1.092 1.091 6.82-2.455 8.185-3.82 1.364-1.363 1.205-3.159 0-4.364s-3.001-1.364-4.365 0Z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.983 13.131 1.785 1.785M12.983 17.216l1.558 1.557"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m21 12.445-3.005-.13V9.343M17.992 12.319l2.43-2.356"
    />
  </Svg>
);
export default IconlystAppleCarrotsTwoTone;
