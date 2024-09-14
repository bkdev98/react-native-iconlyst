import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonOutline = ({
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
      d="M16.216 21.436H8.283a3.32 3.32 0 0 1-3.169-2.3l-2.45-7.544a3.32 3.32 0 0 1 1.211-3.725l6.417-4.663a3.32 3.32 0 0 1 3.916 0l6.418 4.663a3.33 3.33 0 0 1 1.212 3.725l-2.453 7.544a3.32 3.32 0 0 1-3.169 2.3M12.25 4.064c-.386 0-.763.123-1.075.351L4.758 9.078a1.83 1.83 0 0 0-.666 2.048l2.451 7.546a1.83 1.83 0 0 0 1.742 1.264h7.933a1.83 1.83 0 0 0 1.743-1.264l2.452-7.545a1.83 1.83 0 0 0-.667-2.049l-6.418-4.663a1.83 1.83 0 0 0-1.078-.35"
    />
  </Svg>
);
export default IconlystPentagonOutline;
