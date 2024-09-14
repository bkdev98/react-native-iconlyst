import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartVerticalDownwardOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M2.75 5.688a2.608 2.608 0 1 1 5.214 0v12.86a2.607 2.607 0 1 1-5.214 0zM5.357 4.58c-.61 0-1.107.496-1.107 1.108v12.86a1.107 1.107 0 1 0 2.214 0V5.689c0-.612-.496-1.108-1.107-1.108m11.678 10.41a2.607 2.607 0 1 1 5.215 0v3.559a2.607 2.607 0 1 1-5.215 0zm2.608-1.108c-.612 0-1.108.496-1.108 1.108v3.559a1.107 1.107 0 1 0 2.215 0v-3.56c0-.611-.496-1.107-1.107-1.107M9.893 11.262a2.608 2.608 0 1 1 5.214 0v7.285a2.607 2.607 0 1 1-5.214 0zm2.607-1.109c-.611 0-1.107.496-1.107 1.108v7.286a1.107 1.107 0 1 0 2.214 0V11.26c0-.612-.496-1.108-1.107-1.108"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartVerticalDownwardOutline;
