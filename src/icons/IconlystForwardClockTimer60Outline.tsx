import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystForwardClockTimer60Outline = ({
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
      fill={props.color}
      d="M8.737 21.044a.7.7 0 0 1-.306-.067A9.711 9.711 0 1 1 20.847 7.362a.75.75 0 1 1-1.312.73A8.21 8.21 0 1 0 9.047 19.607a.75.75 0 0 1-.307 1.436zM19.678 21.607a2.48 2.48 0 0 1-2.479-2.48v-2.382a2.479 2.479 0 0 1 4.958 0v2.383a2.48 2.48 0 0 1-2.479 2.479m0-5.841a.98.98 0 0 0-.979.979v2.383a.98.98 0 0 0 1.958 0v-2.383a.98.98 0 0 0-.979-.98"
    />
    <Path
      fill={props.color}
      d="M14.133 21.605a2.416 2.416 0 1 1-.004-4.832 2.416 2.416 0 0 1 .004 4.832m0-3.332a.916.916 0 1 0 .002 1.833.916.916 0 0 0-.002-1.833"
    />
    <Path
      fill={props.color}
      d="M12.467 19.94a.75.75 0 0 1-.75-.75v-1.673a3.1 3.1 0 0 1 1.1-2.787 2.59 2.59 0 0 1 3.073.117.75.75 0 0 1-.934 1.174 1.075 1.075 0 0 0-1.28-.06c-.392.273-.462.72-.462 1.556v1.677a.75.75 0 0 1-.747.746M20.519 8.477h-2.972a.75.75 0 1 1 0-1.5h2.223V4.738a.75.75 0 1 1 1.5 0v2.99a.75.75 0 0 1-.751.75M12.41 12.842H8.966a.75.75 0 0 1 0-1.5h2.7V7.91a.75.75 0 1 1 1.5 0v4.184a.75.75 0 0 1-.754.748"
    />
  </Svg>
);
export default IconlystForwardClockTimer60Outline;
