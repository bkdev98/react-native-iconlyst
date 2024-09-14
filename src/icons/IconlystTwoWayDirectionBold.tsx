import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwoWayDirectionBold = ({
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
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.584 14.793c-.008-.018-.023-.03-.032-.048a.7.7 0 0 0-.129-.194l-1.588-1.588a.74.74 0 0 0-.53-.22.749.749 0 0 0-.53 1.28l.31.311h-.342a2.286 2.286 0 0 1-2.283-2.284V8.334a.75.75 0 0 0-.75-.75h-.002a.75.75 0 0 0-.75.75v3.716a2.287 2.287 0 0 1-2.285 2.284h-.342l.311-.311a.749.749 0 1 0-1.06-1.06l-1.589 1.588a.8.8 0 0 0-.129.194c-.009.018-.024.03-.032.048a.8.8 0 0 0-.058.289v.002c0 .027.012.051.015.078.008.069.015.139.042.204a.7.7 0 0 0 .171.254l1.58 1.579a.75.75 0 0 0 1.06-1.06l-.305-.305h.336a3.77 3.77 0 0 0 3.035-1.547 3.77 3.77 0 0 0 3.035 1.547h.336l-.304.305a.749.749 0 1 0 1.06 1.06l1.58-1.579a.7.7 0 0 0 .171-.254c.027-.065.033-.135.041-.204.003-.027.016-.051.016-.078v-.002a.7.7 0 0 0-.059-.289M15.925 22H7.492c-3.16 0-5.284-2.221-5.284-5.527V8.526C2.208 5.221 4.331 3 7.491 3h8.434c3.16 0 5.283 2.221 5.283 5.526v7.947c0 3.306-2.123 5.527-5.283 5.527"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwoWayDirectionBold;
