import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesBubbleBroken = ({
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
      d="M9.816 20.902c-.807-.003-2.613 0-4.734 0a.79.79 0 0 1-.653-1.23c.197-.295.448-.655.646-.934a.88.88 0 0 0 .044-.946c-.3-.525-.75-1.322-.866-1.611a8.22 8.22 0 0 1 .012-6.9M5.882 6.972a8.12 8.12 0 0 1 12.15.733M12.275 12.525a5.154 5.154 0 0 1 7.712-.467 5.2 5.2 0 0 1 1.036 5.846c-.074.185-.36.69-.551 1.023a.56.56 0 0 0 .028.6c.126.178.285.406.41.593a.502.502 0 0 1-.414.782c-1.347 0-3.629-.002-4.14 0a5.15 5.15 0 0 1-3.97-1.847c-.954-1.131-1.344-2.61-1.16-4.021"
    />
  </Svg>
);
export default IconlystMessagesBubbleBroken;
