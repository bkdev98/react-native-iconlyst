import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPinAddOutline = ({
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
      d="M11.865 3.75a6.777 6.777 0 0 0-6.776 6.777c0 2.403 1.435 4.847 3.122 6.747a16.4 16.4 0 0 0 2.416 2.24c.36.266.672.463.916.59.186.098.288.13.321.14l.076-.025q.14-.053.38-.186c.317-.18.719-.456 1.17-.818a.75.75 0 0 1 .939 1.17 11 11 0 0 1-1.369.952q-.305.174-.584.283c-.172.066-.388.13-.611.13-.348 0-.72-.16-1.017-.316a9 9 0 0 1-1.113-.714 18 18 0 0 1-2.646-2.45c-1.775-1.999-3.5-4.791-3.5-7.743a8.277 8.277 0 0 1 16.49-1.022.75.75 0 1 1-1.489.184 6.78 6.78 0 0 0-6.725-5.939"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.605 10.465a3.258 3.258 0 1 1 6.517 0 3.258 3.258 0 0 1-6.517 0m3.26-1.758a1.758 1.758 0 1 0-.002 3.517 1.758 1.758 0 0 0 .002-3.517M17.875 12.566a.75.75 0 0 1 .75.75v4.568a.75.75 0 0 1-1.5 0v-4.568a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.842 15.602a.75.75 0 0 1 .75-.75h4.568a.75.75 0 1 1 0 1.5h-4.568a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPinAddOutline;
