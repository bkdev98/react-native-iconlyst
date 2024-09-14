import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGoogleOptimizeBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M21.505 5.07v6.78c0 1.56-1.26 2.82-2.82 2.82s-2.82-1.26-2.82-2.82V7.89h-3.96c-1.55 0-2.82-1.26-2.82-2.82a2.83 2.83 0 0 1 2.82-2.82h6.78c1.56 0 2.82 1.27 2.82 2.82" />
      <Path d="M14.916 12.148v6.78c0 1.56-1.26 2.82-2.82 2.82s-2.82-1.26-2.82-2.82v-3.96h-3.96c-1.55 0-2.82-1.26-2.82-2.82a2.83 2.83 0 0 1 2.82-2.82h6.78c1.56 0 2.82 1.27 2.82 2.82" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.155 12.158a2.83 2.83 0 1 1-5.66 0 2.83 2.83 0 0 1 5.66 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGoogleOptimizeBulk;
