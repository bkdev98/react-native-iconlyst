import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToolsBulk = ({
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
    <G fill={props.color} opacity={0.4}>
      <Path d="M14.027 16.736a.3.3 0 0 1 0-.424l3.685-3.685a.3.3 0 0 1 .425 0L21.9 16.39c.94.94.94 2.468 0 3.408l-.702.702a2.4 2.4 0 0 1-1.703.704 2.4 2.4 0 0 1-1.704-.704zM4.106 21.594h4.372a.75.75 0 0 0 0-1.5H4.106a.75.75 0 0 0 0 1.5" />
    </G>
    <Path
      fill={props.color}
      d="M6.997 16.357a3.43 3.43 0 0 0 2.432 1.006c.88 0 1.762-.335 2.432-1.006l5.899-5.897a3.446 3.446 0 0 0 0-4.865L15.543 3.38c-1.3-1.298-3.565-1.298-4.863 0l-5.9 5.898a3.445 3.445 0 0 0 0 4.864z"
    />
  </Svg>
);
export default IconlystToolsBulk;
