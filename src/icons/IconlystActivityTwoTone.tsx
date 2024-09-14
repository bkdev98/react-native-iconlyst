import * as React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystActivityTwoTone = ({
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
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      transform="translate(2 1.5)"
    >
      <Path d="m5.245 13.281 2.993-3.89 3.414 2.682 2.93-3.78" opacity={0.4} />
      <Circle cx={17.995} cy={2.7} r={1.922} />
      <Path d="M12.924 1.62H5.657C2.645 1.62.778 3.753.778 6.764v8.083c0 3.011 1.83 5.135 4.879 5.135h8.604c3.011 0 4.879-2.124 4.879-5.135v-7.04" />
    </G>
  </Svg>
);
export default IconlystActivityTwoTone;
