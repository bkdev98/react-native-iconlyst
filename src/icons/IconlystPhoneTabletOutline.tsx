import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneTabletOutline = ({
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
      d="M3.145 6.416c0-2.3 1.865-4.166 4.166-4.166h8.712c2.3 0 4.166 1.864 4.166 4.165a.75.75 0 0 1-1.5 0 2.665 2.665 0 0 0-2.666-2.665H7.31a2.666 2.666 0 0 0-2.666 2.666v10.162a2.666 2.666 0 0 0 2.667 2.665h2.234a.75.75 0 0 1 0 1.5H7.312a4.166 4.166 0 0 1-4.166-4.165z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.709 6.102a.75.75 0 0 1 .75-.75h1.677a.75.75 0 0 1 0 1.5H10.46a.75.75 0 0 1-.75-.75M11.326 11.38a3.17 3.17 0 0 1 3.17-3.17h3.688a3.17 3.17 0 0 1 3.17 3.17l.001 7.2a3.17 3.17 0 0 1-3.17 3.17h-3.688a3.17 3.17 0 0 1-3.17-3.17zm3.17-1.67a1.67 1.67 0 0 0-1.67 1.67v7.2c0 .922.748 1.67 1.67 1.67h3.69a1.67 1.67 0 0 0 1.67-1.67l-.002-7.2a1.67 1.67 0 0 0-1.67-1.67z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.59 18.144a.756.756 0 1 1 1.512 0 .756.756 0 0 1-1.512 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneTabletOutline;
