import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGraphChartLight = ({
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
      d="M12.983 14.169a1.614 1.614 0 1 1 0 .013zM11.312 8.631a1.614 1.614 0 1 1-3.23 0 1.614 1.614 0 0 1 3.23 0M21.109 8.631a1.615 1.615 0 1 1-3.23 0 1.615 1.615 0 0 1 3.23 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.374 9.788-2.681 3.199M5.814 13.172l2.792-3.358M13.5 12.993l-2.705-3.182M20.39 20.37h-14a2 2 0 0 1-2-2v-2.308"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.337 14.352a1.614 1.614 0 1 1-3.228 0 1.614 1.614 0 0 1 3.228 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.39 4.37v8.191"
    />
  </Svg>
);
export default IconlystGraphChartLight;
