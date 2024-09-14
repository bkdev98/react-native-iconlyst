import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChartAnalysishTwoTone = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.86 4.738h9.28a3.76 3.76 0 0 1 3.76 3.76v5.094a3.76 3.76 0 0 1-3.76 3.76H7.86a3.76 3.76 0 0 1-3.76-3.76V8.5a3.76 3.76 0 0 1 3.76-3.76"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.502 13.33V8.357m3.88 4.973v-2.574m-7.76 2.574v-3.315M16.173 21.118l-3.672-3.737-3.673 3.737M12.5 3.12v1.629"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChartAnalysishTwoTone;
