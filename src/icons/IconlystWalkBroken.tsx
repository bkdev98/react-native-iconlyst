import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalkBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.654 11.934c1.249-1.141 2.422-2.315 4-2.998.47-.202.982-.33 1.472-.245.576.096 1.014.48 1.163 1.034.202.758-.128 1.44-.662 1.964-.554.544-1.322.895-1.514 1.717-.096.426 0 .885.224 1.258.331.576.896.928 1.44 1.302 1.771 1.206 2.891 2.965 3.317 5.034M9.217 18.033C8.471 19.174 7.543 20.294 6.391 21M15.236 12.205a5.85 5.85 0 0 0 3.11-.441M14.549 3.021a2.14 2.14 0 0 1 2.416 1.816 2.14 2.14 0 0 1-1.816 2.415 2.14 2.14 0 0 1-2.415-1.816"
    />
  </Svg>
);
export default IconlystWalkBroken;
