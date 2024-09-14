import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMovieStarOutline = ({
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
      d="M16.256 21.75H8.243c-3.166 0-5.294-2.22-5.294-5.525V7.776c0-3.3 2.128-5.526 5.295-5.526h8.012c3.166 0 5.293 2.221 5.293 5.526v8.449c0 3.305-2.127 5.525-5.293 5.525m-8.008-18c-2.306 0-3.795 1.58-3.795 4.026v8.449c0 2.445 1.49 4.025 3.794 4.025h8.013c2.3 0 3.793-1.58 3.793-4.025V7.776c0-2.446-1.489-4.026-3.793-4.026z"
    />
    <Path
      fill={props.color}
      d="M20.793 8.226H3.707a.75.75 0 0 1 0-1.5h4.816V3a.75.75 0 1 1 1.5 0v3.726h4.453V3a.75.75 0 1 1 1.5 0v3.726h4.817a.75.75 0 0 1 0 1.5M10.614 17.698q-.177 0-.346-.052a1.166 1.166 0 0 1-.808-1.312l.207-1.191-.881-.846a1.164 1.164 0 0 1 .655-1.992l1.217-.176.546-1.09a1.18 1.18 0 0 1 1.587-.511c.214.11.389.286.5.5v.008l.546 1.091 1.226.177a1.164 1.164 0 0 1 .993 1.3c-.036.26-.157.501-.344.685l-.884.847.208 1.192a1.173 1.173 0 0 1-.965 1.349 1.16 1.16 0 0 1-.728-.117l-1.1-.57-1.1.569a1.14 1.14 0 0 1-.53.139m1.637-2.244c.188 0 .374.045.54.132l.657.34-.123-.706a1.16 1.16 0 0 1 .34-1.037l.512-.49-.718-.1a1.17 1.17 0 0 1-.88-.632l-.33-.663-.328.658a1.17 1.17 0 0 1-.891.633l-.708.1.513.492a1.15 1.15 0 0 1 .34 1.036l-.122.7.655-.34c.168-.085.354-.128.542-.127z"
    />
  </Svg>
);
export default IconlystMovieStarOutline;
