import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownCircleBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="nonzero">
      <Path
        d="M22 12c0 5.515-4.486 10-10 10S2 17.515 2 12 6.486 2 12 2s10 4.486 10 10"
        opacity={0.4}
      />
      <Path d="M16.22 10.558a.75.75 0 0 1-.218.528l-3.47 3.487a.75.75 0 0 1-1.063 0l-3.472-3.487a.749.749 0 1 1 1.063-1.058L12 12.983l2.94-2.953a.75.75 0 0 1 1.28.528" />
    </G>
  </Svg>
);
export default IconlystArrowDownCircleBulk;
