import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailTimeWaitTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.635 10.23V8.628c0-2.63-1.756-4.772-4.362-4.772H7.862C5.256 3.857 3.5 6 3.5 8.63v5.884c0 2.632 1.756 4.773 4.362 4.765h4.128"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.174 20.143a3.326 3.326 0 1 0 0-6.652 3.326 3.326 0 0 0 0 6.652"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m19.206 17.681-1.052-.628V15.7M17.123 8.87l-3.806 3.095c-.718.57-1.733.57-2.451 0L7.027 8.87"
    />
  </Svg>
);
export default IconlystEmailTimeWaitTwoTone;
