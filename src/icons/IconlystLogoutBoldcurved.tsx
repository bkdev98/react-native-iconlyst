import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLogoutBoldcurved = ({
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
      d="m22.42 11.59-2.928-2.916a.749.749 0 1 0-1.058 1.062l1.64 1.634H17.14q.015.75 0 1.5h2.937l-1.642 1.636a.751.751 0 0 0 1.058 1.063l2.928-2.917a.746.746 0 0 0 0-1.062M8.889 12.12c0-.41.33-.75.75-.75h7.5c-.01-1.26-.08-2.52-.18-3.78v-.01c-.37-4.03-2.2-5.33-7.5-5.33-7.6 0-7.6 2.85-7.6 9.75s0 9.75 7.6 9.75c5.3 0 7.13-1.3 7.5-5.34q.15-1.755.18-3.54h-7.5c-.42 0-.75-.33-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLogoutBoldcurved;
