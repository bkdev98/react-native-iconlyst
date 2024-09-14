import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectionBroken = ({
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
      d="M12.42 21a2.095 2.095 0 1 0-2.095-2.095M10.482 4.936 12.418 3l1.936 1.936M16.291 8.273v-1.6c0-.36.292-.652.652-.652h1.6c.36 0 .652.292.652.653v1.599c0 .36-.293.652-.653.652h-1.599a.653.653 0 0 1-.652-.652M8.886 9.214c0 .984-.801 1.79-1.79 1.79-.99 0-1.791-.806-1.791-1.79 0-.985.801-1.79 1.79-1.79.99 0 1.791.805 1.791 1.79M12.42 14.71l-5.324-1.174v-2.401M17.744 8.926v2.326l-2.662.848M12.42 3v13.811"
    />
  </Svg>
);
export default IconlystConnectionBroken;
