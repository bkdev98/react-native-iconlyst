import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMedicalBagOutline = ({
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
      d="M2.614 9.903a4.79 4.79 0 0 1 4.79-4.79h9.692a4.79 4.79 0 0 1 4.79 4.79v7.059a4.79 4.79 0 0 1-4.79 4.79H7.404a4.79 4.79 0 0 1-4.79-4.79zm4.79-3.29a3.29 3.29 0 0 0-3.29 3.29v7.059a3.29 3.29 0 0 0 3.29 3.29h9.692a3.29 3.29 0 0 0 3.29-3.29V9.903a3.29 3.29 0 0 0-3.29-3.29z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.16 13.43a5.09 5.09 0 1 1 10.18 0 5.09 5.09 0 0 1-10.18 0m5.09-3.59a3.59 3.59 0 1 0 0 7.18 3.59 3.59 0 0 0 0-7.18"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.252 11.098a.75.75 0 0 1 .75.75v3.165a.75.75 0 0 1-1.5 0v-3.165a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.92 13.43a.75.75 0 0 1 .75-.75h3.165a.75.75 0 0 1 0 1.5H10.67a.75.75 0 0 1-.75-.75M8.12 4.937a2.687 2.687 0 0 1 2.686-2.687h2.89a2.687 2.687 0 0 1 2.687 2.687v.924a.75.75 0 0 1-1.5 0v-.924c0-.656-.53-1.187-1.187-1.187h-2.89c-.656 0-1.187.531-1.187 1.187v.924a.75.75 0 0 1-1.5 0z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMedicalBagOutline;
