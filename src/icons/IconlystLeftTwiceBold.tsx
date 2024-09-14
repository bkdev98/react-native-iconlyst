import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLeftTwiceBold = ({
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
      fillRule="evenodd"
      d="M20.417 15.037H6.995l2.257-2.258a.999.999 0 1 0-1.414-1.413l-3.96 3.962q-.003 0-.004.002a.98.98 0 0 0-.293.704v.006a1 1 0 0 0 .293.704l3.964 3.964a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-2.257-2.258h13.422a1 1 0 1 0 0-2M15.077 11.875a.997.997 0 0 0 1.414 0 1 1 0 0 0 0-1.414l-1.876-1.876h5.804a1 1 0 1 0 0-2h-5.806l1.878-1.878a.999.999 0 1 0-1.414-1.414l-3.585 3.584a1 1 0 0 0 .026 1.441z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLeftTwiceBold;
