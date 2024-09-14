import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystItalicBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M17 6h-5.9990000000000006a1 1 0 1 1 0-2H17a1 1 0 1 1 0 2M7 18h6a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2" />
    </G>
    <Path fill={props.color} d="M12.674 6 9.246 18h2.08l3.429-12z" />
  </Svg>
);
export default IconlystItalicBulk;
