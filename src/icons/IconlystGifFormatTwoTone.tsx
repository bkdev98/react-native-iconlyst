import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGifFormatTwoTone = ({
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
      d="M6.401 4.176h11.866c2.507 0 4.067 1.77 4.067 4.274v7.103c0 2.504-1.56 4.274-4.068 4.274H6.4c-2.507 0-4.067-1.77-4.067-4.274V8.45c0-2.504 1.568-4.274 4.067-4.274"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.907 9.545a2.7 2.7 0 0 0-1.077-.28c-1.432-.072-2.618 1.162-2.678 2.595-.066 1.577.98 2.878 2.54 2.878.913 0 1.564-.326 1.564-1.239V12H8.692M12.776 11.673v3.066m0-5.747v.011M18.212 10.025a1.88 1.88 0 0 0-1.188-.607c-.813 0-1.471.66-1.471 1.472v3.848M17.769 12.52h-2.216"
    />
  </Svg>
);
export default IconlystGifFormatTwoTone;
