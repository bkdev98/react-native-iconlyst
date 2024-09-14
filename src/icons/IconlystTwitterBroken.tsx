import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwitterBroken = ({
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
      d="M17.45 16.85c-1.636 1.785-3.96 2.921-6.87 3.105-1.844.117-5.192-.223-6.83-2.197a8.62 8.62 0 0 0 5.167-1.519c-3.153-1.768-5.255-4.873-4.18-11.273a13.2 13.2 0 0 0 4.469 2.987M12.405 8.8c-.194-1.52.646-3.98 2.732-4.615 2.576-.783 4.333 1.575 4.333 1.575l2.28-.342-1.6 2.422.026.232c.144 2.29-.217 4.407-1.033 6.2"
    />
  </Svg>
);
export default IconlystTwitterBroken;
