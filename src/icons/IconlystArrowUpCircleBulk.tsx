import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowUpCircleBulk = ({
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
        d="M2 12C2 6.485 6.486 2 12 2s10 4.485 10 10-4.486 10-10 10S2 17.514 2 12"
        opacity={0.4}
      />
      <Path d="M7.78 13.442c0-.19.072-.383.218-.529l3.47-3.487a.75.75 0 0 1 1.063 0l3.472 3.488a.749.749 0 1 1-1.063 1.058L12 11.018l-2.94 2.953a.75.75 0 0 1-1.28-.529" />
    </G>
  </Svg>
);
export default IconlystArrowUpCircleBulk;
