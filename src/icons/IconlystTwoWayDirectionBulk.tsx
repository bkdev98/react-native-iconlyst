import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTwoWayDirectionBulk = ({
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
      d="M16.217 21.5H7.784c-3.161 0-5.284-2.221-5.284-5.527V8.026C2.5 4.721 4.623 2.5 7.783 2.5h8.434c3.16 0 5.283 2.221 5.283 5.526v7.947c0 3.306-2.123 5.527-5.283 5.527"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.876 9.707c-.008.018-.023.03-.032.048a.7.7 0 0 1-.129.194l-1.588 1.588a.74.74 0 0 1-.53.22.749.749 0 0 1-.53-1.28l.31-.311h-.342a2.286 2.286 0 0 0-2.283 2.284v3.716a.75.75 0 0 1-.75.75H12a.75.75 0 0 1-.751-.75V12.45a2.287 2.287 0 0 0-2.284-2.284h-.342l.311.31a.749.749 0 1 1-1.061 1.06L6.285 9.95a.8.8 0 0 1-.129-.194c-.009-.018-.024-.03-.032-.048a.8.8 0 0 1-.058-.29v-.001c0-.027.012-.051.015-.078.008-.07.015-.14.042-.204a.7.7 0 0 1 .171-.254L7.873 7.3a.75.75 0 0 1 1.061 1.06l-.305.306h.336c1.247 0 2.346.614 3.035 1.547a3.77 3.77 0 0 1 3.035-1.547h.336l-.304-.305a.749.749 0 1 1 1.06-1.06l1.579 1.579a.7.7 0 0 1 .172.254c.027.065.033.135.041.204.003.027.016.05.016.078l-.001.002a.7.7 0 0 1-.058.289"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTwoWayDirectionBulk;
