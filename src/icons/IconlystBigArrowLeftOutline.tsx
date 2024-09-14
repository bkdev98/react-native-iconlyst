import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBigArrowLeftOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.814 4.304c1.338-1.346 3.652-.406 3.652 1.502V8.07h7.407c1.175 0 2.127.953 2.127 2.127V13.8a2.127 2.127 0 0 1-2.127 2.127h-7.407v2.27c0 1.903-2.307 2.846-3.645 1.502q-1.86-1.866-3.725-3.726-1.238-1.235-2.474-2.473a2.124 2.124 0 0 1-.003-3q1.44-1.444 2.874-2.873C6.6 6.52 7.706 5.417 8.814 4.304m2.152 1.502c0-.56-.687-.848-1.088-.445-1.104 1.11-2.218 2.221-3.33 3.332q-1.44 1.435-2.866 2.865a.623.623 0 0 0 0 .88l2.471 2.47a1897 1897 0 0 1 3.73 3.732.634.634 0 0 0 1.083-.444v-2.49c0-.707.573-1.28 1.28-1.28h7.627c.346 0 .627-.28.627-.627v-3.602a.627.627 0 0 0-.627-.627h-7.628a1.28 1.28 0 0 1-1.28-1.28z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBigArrowLeftOutline;
