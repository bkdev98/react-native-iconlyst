import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterBulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M10.735 16.848H4.26a1 1 0 1 0 0 2h6.474a1 1 0 1 0 0-2M20.238 6.36h-6.47a1 1 0 1 0 0 2h6.47a1 1 0 1 0 0-2" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.517 14.627c-2.318 0-3.222.903-3.222 3.222s.904 3.222 3.222 3.222c2.32 0 3.222-.903 3.222-3.222s-.903-3.222-3.222-3.222M6.983 10.58c2.32 0 3.223-.902 3.223-3.222 0-2.318-.904-3.221-3.223-3.221s-3.222.903-3.222 3.22c0 2.32.903 3.224 3.222 3.224"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFilterBulkcurved;
