import * as React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserAnalyzeLight = ({
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
      cx={11.133}
      cy={8.185}
      r={4.701}
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
      d="M4.718 19.515c-.11-.638-.065-1.3-.065-1.944 0-2.43 1.97-4.4 4.399-4.4h4.283c1.182 0 2.256.467 3.046 1.226M19.657 17.68l-2.377 2.377-1.863-1.863-2.316 2.317"
    />
  </Svg>
);
export default IconlystUserAnalyzeLight;
