import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationBackOutline = ({
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
      d="M5.88 21.748a2.438 2.438 0 0 1-1.6-4.26l4.3-3.818a3.07 3.07 0 0 1 4.08 0l4.3 3.818a2.436 2.436 0 0 1-2.084 4.213l-4-.778h-.5l-4 .778a2.5 2.5 0 0 1-.496.047m-.608-3.139a.936.936 0 0 0 .8 1.62l4.073-.792a1 1 0 0 1 .143-.014h.643q.072 0 .143.014l4.074.791a.936.936 0 0 0 .8-1.619l-4.3-3.818a1.57 1.57 0 0 0-2.086 0zM18.154 13.613a.75.75 0 0 1-.536-.225L15.482 11.2a.75.75 0 0 1 1.073-1.05l1.6 1.639 1.6-1.637A.75.75 0 0 1 20.83 11.2l-2.134 2.187a.75.75 0 0 1-.54.226"
    />
    <Path
      fill={props.color}
      d="M18.153 13.612a.75.75 0 0 1-.75-.75V6.77a3.02 3.02 0 1 0-6.04 0v3.19a.75.75 0 1 1-1.5 0V6.77a4.52 4.52 0 0 1 9.04 0v6.092a.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystNavigationBackOutline;
