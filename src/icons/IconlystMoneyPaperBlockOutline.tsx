import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperBlockOutline = ({
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
      d="M4.656 6.27C4.256 6.7 4 7.344 4 8.172v7.41c0 .828.256 1.473.657 1.904.394.425.985.701 1.782.701h6.223a.75.75 0 0 1 0 1.5H6.439c-1.168 0-2.173-.418-2.88-1.18-.703-.755-1.059-1.788-1.059-2.926V8.173c0-1.137.356-2.17 1.058-2.925.708-.761 1.712-1.18 2.88-1.18h11.624c1.165 0 2.17.419 2.877 1.18C21.643 6.003 22 7.035 22 8.173v2.002a.75.75 0 0 1-1.5 0V8.173c0-.827-.257-1.472-.658-1.903-.396-.425-.987-.702-1.78-.702H6.438c-.797 0-1.387.277-1.782.701"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.713 8.324a.75.75 0 0 1 .75-.75h1.403a.75.75 0 0 1 0 1.5H6.463a.75.75 0 0 1-.75-.75M12.248 10.336a1.54 1.54 0 0 0-1.537 1.541c0 .852.69 1.542 1.537 1.542a1.54 1.54 0 0 0 1.539-1.542 1.54 1.54 0 0 0-1.539-1.541m-3.037 1.541a3.04 3.04 0 0 1 3.037-3.041 3.04 3.04 0 0 1 3.039 3.041 3.04 3.04 0 0 1-3.039 3.042 3.04 3.04 0 0 1-3.037-3.042M18.412 14.475a2.04 2.04 0 0 0-2.037 2.04 2.04 2.04 0 0 0 2.037 2.042 2.04 2.04 0 0 0 2.037-2.042 2.04 2.04 0 0 0-2.037-2.04m-3.537 2.04a3.538 3.538 0 1 1 7.074 0 3.54 3.54 0 0 1-3.537 3.542 3.54 3.54 0 0 1-3.537-3.542"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.966 14.065a.75.75 0 0 1 1.06 0l3.833 3.838a.75.75 0 0 1-1.061 1.06l-3.833-3.837a.75.75 0 0 1 .001-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoneyPaperBlockOutline;
