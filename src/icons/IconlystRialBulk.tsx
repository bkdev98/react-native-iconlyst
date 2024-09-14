import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRialBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.403 15.772h.977a3.076 3.076 0 0 0 3.075-3.069v-1.6a1 1 0 1 0-2 0v1.6c0 .59-.483 1.07-1.075 1.07h-.977a1.074 1.074 0 0 1-1.077-1.07v-6.38a1 1 0 1 0-2 0v6.38a3.077 3.077 0 0 0 3.077 3.07M21 9.822a1 1 0 0 0-1 1v3.5a2.73 2.73 0 0 1-1.811 2.531 1 1 0 1 0 .684 1.879A4.79 4.79 0 0 0 22 14.343v-3.521a1 1 0 0 0-1-1"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M15.195 16.803h-2.666a1 1 0 1 0 0 2h2.666a1 1 0 1 0 0-2M8.891 5.322a1 1 0 0 0-1 1v8.2a1.946 1.946 0 0 1-3.892 0v-1.349a1 1 0 1 0-2 0v1.35a3.95 3.95 0 0 0 3.948 3.94 3.947 3.947 0 0 0 3.944-3.94v-8.2a1 1 0 0 0-1-1" />
    </G>
  </Svg>
);
export default IconlystRialBulk;
