import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLibraryBulk = ({
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
      d="M10.689 20.148H3.57a1 1 0 0 1 0-2h7.118a1 1 0 0 1 0 2M10.582 10.617H3.57a1 1 0 0 1 0-2h7.01a1 1 0 0 1 0 2"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.863 19.854a.998.998 0 0 0 1.415-.001 1 1 0 0 0-.001-1.414l-1.446-1.444c.543-.78.862-1.73.862-2.752a4.836 4.836 0 0 0-4.832-4.83 4.836 4.836 0 0 0-4.831 4.83 4.836 4.836 0 0 0 4.83 4.832c.92 0 1.782-.258 2.515-.706zm-6.833-5.61a2.834 2.834 0 0 1 2.83-2.832 2.834 2.834 0 0 1 2.833 2.831 2.835 2.835 0 0 1-2.832 2.832 2.834 2.834 0 0 1-2.831-2.832"
      clipRule="evenodd"
    />
    <G fill={props.color} opacity={0.4}>
      <Path d="M3.57 5.852h18a1 1 0 0 0 0-2h-18a1 1 0 0 0 0 2M8.003 15.383H3.57a1 1 0 0 1 0-2h4.432a1 1 0 0 1 0 2" />
    </G>
  </Svg>
);
export default IconlystSearchLibraryBulk;
