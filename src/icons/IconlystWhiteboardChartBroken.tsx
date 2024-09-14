import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteboardChartBroken = ({
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
      d="M20.9 8.38a3.76 3.76 0 0 0-3.76-3.76H7.86A3.76 3.76 0 0 0 4.1 8.38v5.093a3.76 3.76 0 0 0 3.76 3.76h9.28a3.76 3.76 0 0 0 3.76-3.76v-1.707M12.502 13.211V8.238m3.88 4.973v-2.575m-7.76 2.575V9.895M16.173 20.999l-3.672-3.737-3.673 3.737M12.5 3v1.63"
    />
  </Svg>
);
export default IconlystWhiteboardChartBroken;
