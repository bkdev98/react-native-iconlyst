import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDotBarChartLineLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.763 10.416-2.68 3.199m-9.877.182 2.791-3.357m4.895 3.178-2.704-3.182m-4.46 4.544a1.614 1.614 0 1 1-3.229 0 1.614 1.614 0 0 1 3.229 0m6.647-.184a1.614 1.614 0 1 1 1.614 1.614 1.607 1.607 0 0 1-1.614-1.602zm-1.67-5.538a1.614 1.614 0 1 1-3.228 0 1.614 1.614 0 0 1 3.228 0m9.795 0a1.614 1.614 0 1 1-3.227 0 1.614 1.614 0 0 1 3.227 0"
    />
  </Svg>
);
export default IconlystDotBarChartLineLight;
