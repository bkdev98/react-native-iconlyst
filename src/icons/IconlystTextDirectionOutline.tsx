import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextDirectionOutline = ({
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
      d="M5.387 10.22a5.205 5.205 0 0 1 5.204-5.204h8.273a.75.75 0 0 1 0 1.5h-8.273a3.705 3.705 0 1 0 0 7.409h.637a.75.75 0 0 1 0 1.5h-.637a5.205 5.205 0 0 1-5.204-5.205"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.318 5.016a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-14a.75.75 0 0 1 .75-.75M11.227 5.016a.75.75 0 0 1 .75.75v14a.75.75 0 0 1-1.5 0v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTextDirectionOutline;
