import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayDownOutline = ({
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
      d="M20.213 6.057c.66.931.668 2.103.26 3.359l-.017.048c-1.159 2.875-3.564 6.621-5.457 8.715-.882 1.002-1.883 1.64-3.001 1.64-1.12 0-2.12-.638-3-1.64-1.896-2.094-4.3-5.84-5.459-8.715l-.02-.053c-.396-1.251-.39-2.424.264-3.356.638-.909 1.76-1.392 3.126-1.604l.032-.005a44 44 0 0 1 5.057-.262 44 44 0 0 1 5.092.267c1.359.22 2.482.701 3.123 1.606m-3.344-.122A42 42 0 0 0 12 5.684h-.006a42 42 0 0 0-4.871.251c-1.19.187-1.82.564-2.114.982-.276.394-.382 1.01-.069 2.014 1.095 2.703 3.396 6.285 5.172 8.245l.008.009c.744.848 1.37 1.134 1.877 1.134s1.132-.287 1.878-1.134l.007-.009c1.775-1.96 4.077-5.544 5.172-8.248.32-1.002.211-1.613-.066-2.004-.297-.419-.932-.795-2.12-.989"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPlayDownOutline;
