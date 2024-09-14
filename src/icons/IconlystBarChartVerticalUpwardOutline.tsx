import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartVerticalUpwardOutline = ({
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
      d="M19.643 4.58c-.611 0-1.108.495-1.108 1.108v12.861a1.107 1.107 0 1 0 2.215 0V5.688c0-.613-.496-1.108-1.107-1.108m-2.608 1.108a2.608 2.608 0 1 1 5.215 0v12.861a2.607 2.607 0 1 1-5.215 0zM5.357 13.882c-.611 0-1.107.496-1.107 1.108v3.559a1.107 1.107 0 1 0 2.215 0v-3.56c0-.611-.496-1.107-1.108-1.107M2.75 14.99a2.607 2.607 0 1 1 5.215 0v3.559a2.607 2.607 0 1 1-5.215 0zM12.5 10.153c-.611 0-1.107.496-1.107 1.109v7.285a1.107 1.107 0 1 0 2.214 0v-7.285c0-.613-.496-1.109-1.107-1.109m-2.607 1.109a2.608 2.608 0 1 1 5.214 0v7.285a2.607 2.607 0 1 1-5.214 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartVerticalUpwardOutline;
