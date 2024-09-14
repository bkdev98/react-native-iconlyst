import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserAnalyzeBroken = ({
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
      d="M6.683 8.187a4.7 4.7 0 1 0 .902-2.77M4.968 19.513c-.11-.638-.065-1.3-.065-1.944 0-2.43 1.97-4.4 4.399-4.4h4.283c1.182 0 2.256.467 3.046 1.226M19.907 17.682l-2.377 2.377-1.863-1.863-2.316 2.317"
    />
  </Svg>
);
export default IconlystUserAnalyzeBroken;
