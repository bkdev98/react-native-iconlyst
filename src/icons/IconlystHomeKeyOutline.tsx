import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeKeyOutline = ({
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
      d="M10.852 4.534a2.214 2.214 0 0 1 2.796 0zm0 0L5.28 9.074a2.22 2.22 0 0 0-.816 1.717v7.174a2.57 2.57 0 0 0 2.572 2.572h10.43a2.57 2.57 0 0 0 2.573-2.572V10.79c0-.665-.3-1.295-.816-1.717l-5.574-4.54M9.905 3.37a3.714 3.714 0 0 1 4.69 0l5.575 4.54a3.72 3.72 0 0 1 1.368 2.88v7.174a4.07 4.07 0 0 1-4.072 4.072H7.035a4.07 4.07 0 0 1-4.072-4.072V10.79c0-1.117.502-2.174 1.368-2.88z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.112 12.328a1.052 1.052 0 1 1-.003 0zm2.552 1.052a2.55 2.55 0 0 0-2.552-2.552h-.005a2.552 2.552 0 1 0 2.557 2.552"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.012 13.382a.75.75 0 0 0-.75-.75H7.586a.75.75 0 0 0-.75.75v1.802a.75.75 0 0 0 1.5 0v-1.052h4.926a.75.75 0 0 0 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.338 12.632a.75.75 0 0 0-.75.75v1.802a.75.75 0 0 0 1.5 0v-1.802a.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeKeyOutline;
