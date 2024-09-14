import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystKettleBold = ({
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
      d="M6.79 9.263a7.34 7.34 0 0 0 .852 3.434 1 1 0 0 0-.067.122c-.789 1.21-1.25 2.643-1.248 4.114 0 .666.106 1.35.2 1.962q.046.298.083.568A2.35 2.35 0 0 0 8.952 21.5l9.722-.067c.685-.005 1.248-.274 1.652-.716.387-.424.594-.967.678-1.497.08-.491.147-1.004.185-1.526.12-1.65-.17-3.268-.94-4.653a7.13 7.13 0 0 0 1.066-3.778A7.265 7.265 0 0 0 14.052 2 7.265 7.265 0 0 0 6.79 9.263m1.5 0A5.765 5.765 0 0 1 14.052 3.5a5.765 5.765 0 0 1 5.225 8.197 7.3 7.3 0 0 0-1.427-1.19 7.3 7.3 0 0 0-2.198-.946q.129-.332.13-.707a1.974 1.974 0 1 0-3.799.75 7.57 7.57 0 0 0-3.27 1.84 5.8 5.8 0 0 1-.423-2.181m8.751 2.507q.425.273.782.597H9.925c1.955-1.729 4.845-2.05 7.116-.597m-3.705-2.916a.473.473 0 1 1 .947-.001.473.473 0 0 1-.947 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M6.477 12.318a7.6 7.6 0 0 0-1.212 3.692L3.083 12.52a.534.534 0 0 1 .225-.77l1.307-.56a.53.53 0 0 1 .605.11z"
    />
  </Svg>
);
export default IconlystKettleBold;
