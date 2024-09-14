import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockAddPlusBulk = ({
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
      d="M14.096 18.018a4.96 4.96 0 0 1 4.962-4.963 4.9 4.9 0 0 1 2.254.554c.187.097.423-.006.454-.214A9.4 9.4 0 0 0 21.872 12c0-5.238-4.262-9.5-9.5-9.5s-9.5 4.262-9.5 9.5 4.262 9.5 9.5 9.5c.823 0 1.623-.105 2.385-.303.204-.053.28-.298.164-.474a4.88 4.88 0 0 1-.825-2.705"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.466 21.299a.75.75 0 0 1-.75-.75v-1.62h-1.62a.75.75 0 0 1 0-1.5h1.62v-1.617a.75.75 0 1 1 1.5 0v1.618h1.618a.75.75 0 0 1 0 1.5h-1.618v1.619a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M13.45 12.67a.75.75 0 0 1-.365.644l-3.175 1.9a.747.747 0 0 1-1.028-.258.75.75 0 0 1 .258-1.029l2.81-1.682V8.58a.75.75 0 0 1 1.5 0z"
    />
  </Svg>
);
export default IconlystClockAddPlusBulk;
