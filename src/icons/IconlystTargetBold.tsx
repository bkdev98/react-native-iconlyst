import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.97 7.85a.292.292 0 0 0-.428-.089l-3.302 2.405-.01.008-.006.006c-.012.013-.03.015-.044.026l-.01.007-3.725 2.717a.72.72 0 0 1-.44.14c-.23 0-.46-.1-.61-.3a.75.75 0 0 1 .17-1.05l2.812-2.05c.15-.11.166-.33.021-.446a3.84 3.84 0 0 0-2.393-.834c-2.17 0-3.94 1.77-3.94 3.94a3.94 3.94 0 0 0 3.94 3.93c1.71 0 3.21-1.09 3.73-2.72.13-.4.55-.61.94-.49.4.13.62.55.49.94a5.39 5.39 0 0 1-5.16 3.77c-3 0-5.44-2.43-5.44-5.43s2.44-5.44 5.44-5.44c1.39 0 2.72.547 3.704 1.484.11.104.277.12.398.031l2.554-1.854a.292.292 0 0 0 .047-.435 9.11 9.11 0 0 0-6.713-2.936c-5.05 0-9.14 4.1-9.14 9.15s4.09 9.14 9.14 9.14 9.15-4.09 9.15-9.14a9.1 9.1 0 0 0-1.175-4.48"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTargetBold;
