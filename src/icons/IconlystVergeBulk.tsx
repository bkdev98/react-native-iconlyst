import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVergeBulk = ({
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
      d="M16.717 2.505H8.282C5.122 2.505 3 4.728 3 8.035v7.94c0 3.308 2.123 5.53 5.282 5.53h8.433c3.162 0 5.285-2.222 5.285-5.53v-7.94c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.13 16.57 4.422-6.85a.75.75 0 1 0-1.26-.813L12.5 14.78 8.707 8.907a.75.75 0 1 0-1.259.814l4.422 6.85a.753.753 0 0 0 1.26 0"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.627 7.49a.75.75 0 0 1 .661-.396h4.422a.75.75 0 0 1 .625 1.165l-2.21 3.33a.75.75 0 0 1-1.249 0l-2.212-3.33a.75.75 0 0 1-.037-.77m2.06 1.104h1.626L12.5 9.819z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVergeBulk;
