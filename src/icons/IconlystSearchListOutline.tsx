import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchListOutline = ({
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
      d="M21.114 20.754a.75.75 0 0 1-.53-.219l-1.714-1.714a4.816 4.816 0 1 1 1.06-1.06l1.715 1.713a.75.75 0 0 1-.531 1.28m-5.08-9.145a3.316 3.316 0 0 0-2.346 5.662 3.4 3.4 0 0 0 4.693 0 3.316 3.316 0 0 0-2.347-5.662M8 19.781H3.5a.75.75 0 1 1 0-1.5H8a.75.75 0 0 1 0 1.5m0-6.75H3.5a.75.75 0 1 1 0-1.5H8a.75.75 0 0 1 0 1.5m13.5-6.75h-18a.75.75 0 1 1 0-1.5h18a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystSearchListOutline;
