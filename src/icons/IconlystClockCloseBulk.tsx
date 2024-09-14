import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClockCloseBulk = ({
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
      d="M12.728 2.5c-5.238 0-9.5 4.262-9.5 9.5s4.262 9.5 9.5 9.5c.752 0 1.482-.093 2.183-.262.197-.047.282-.275.184-.453a5.2 5.2 0 0 1-.643-2.5 5.23 5.23 0 0 1 5.23-5.23c.721 0 1.4.16 2.023.43.186.08.404-.028.432-.228.058-.411.091-.83.091-1.257 0-5.238-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m20.696 18.086 1.144-1.144a.75.75 0 1 0-1.06-1.061l-1.145 1.144-1.144-1.143a.749.749 0 1 0-1.06 1.06l1.143 1.144-1.144 1.145a.749.749 0 1 0 1.06 1.06l1.145-1.144 1.145 1.145a.751.751 0 0 0 1.061-1.061z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M13.806 12.67a.75.75 0 0 1-.365.644l-3.175 1.9a.747.747 0 0 1-1.028-.258.75.75 0 0 1 .258-1.029l2.81-1.682V8.58a.75.75 0 0 1 1.5 0z"
    />
  </Svg>
);
export default IconlystClockCloseBulk;
