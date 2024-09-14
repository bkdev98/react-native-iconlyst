import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGifFormatBroken = ({
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
      d="M12.084 19.829H6.151c-2.5 0-4.067-1.77-4.067-4.275V8.451c0-2.504 1.56-4.273 4.067-4.273h11.865c2.508 0 4.068 1.77 4.068 4.273v7.103c0 2.505-1.56 4.274-4.067 4.274h-1.966"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.657 9.545a2.7 2.7 0 0 0-1.077-.28c-1.432-.072-2.618 1.162-2.678 2.595-.066 1.577.98 2.878 2.54 2.878.913 0 1.564-.326 1.564-1.239V12H8.442M12.526 11.673v3.066m0-5.747v.011M17.962 10.025a1.88 1.88 0 0 0-1.188-.607c-.813 0-1.471.66-1.471 1.472v3.848M17.519 12.52h-2.216"
    />
  </Svg>
);
export default IconlystGifFormatBroken;
