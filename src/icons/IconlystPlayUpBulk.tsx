import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlayUpBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.242 14.916-.013-.036c-1.103-2.737-3.431-6.454-5.41-8.64-.908-1.033-1.855-1.557-2.815-1.558-.96 0-1.91.525-2.815 1.554-1.983 2.192-4.31 5.909-5.425 8.677-.39 1.204-.346 2.21.13 2.99.52.852 1.549 1.408 3.08 1.654 1.546.173 3.169.26 4.825.26h.2c1.755.017 3.425-.08 5.053-.263 1.495-.232 2.518-.78 3.043-1.625.484-.782.534-1.795.147-3.013"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPlayUpBulk;
