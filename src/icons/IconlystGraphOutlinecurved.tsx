import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphOutlinecurved = ({
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
      d="M13.199 10.741c.455.454 1.577.648 2.853.648 1.944 0 4.247-.45 5.097-1.119.777-.612 1.084-1.528.864-2.579-.453-2.164-3.204-4.814-5.66-5.452-1.263-.329-2.337-.075-3.024.715-.968 1.116-1.247 6.667-.13 7.787m1.072-1.048c-.49-.657-.341-5.01.195-5.76.302-.343.809-.424 1.509-.243 1.886.491 4.234 2.705 4.57 4.308.133.638-.103.92-.324 1.093-.965.76-5.312 1.062-5.95.602"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.417 13.45c0 4.66 3.791 8.451 8.452 8.451 4.553 0 7.2-3.462 8.049-5.508.559-1.35.547-2.456-.032-3.036-.72-.72-2.003-.68-3.487-.635l-.025.001c-1.359.044-2.897.093-3.51-.52-.678-.679-.734-2.274-.779-3.556v-.002c-.046-1.307-.082-2.338-.66-2.916-.669-.668-1.759-.759-2.99-.248-2.433 1.007-5.018 4.143-5.018 7.97m5.591-6.583c.346-.144.665-.216.915-.216.194 0 .347.044.436.133.167.216.203 1.236.227 1.913V8.7c.054 1.544.122 3.467 1.217 4.563 1.07 1.07 2.946 1.011 4.605.96l.032-.002c.834-.026 2.07-.064 2.368.181.073.193.026 1.08-.767 2.37-.523.852-2.514 3.63-6.173 3.63a6.96 6.96 0 0 1-6.95-6.952c0-3.56 2.508-5.928 4.09-6.583"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGraphOutlinecurved;
