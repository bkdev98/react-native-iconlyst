import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTargetBulk = ({
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
      d="M21.145 12.33c0 5.05-4.1 9.14-9.15 9.14s-9.14-4.09-9.14-9.14 4.09-9.15 9.14-9.15c2.77 0 5.25 1.23 6.93 3.18.32.38.62.78.88 1.21a9.1 9.1 0 0 1 1.34 4.76"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.165 13.99a5.39 5.39 0 0 1-5.16 3.77c-3 0-5.44-2.43-5.44-5.43s2.44-5.44 5.44-5.44c1.48 0 2.89.62 3.89 1.67l3.03-2.2c.32.38.62.78.88 1.21l-3.57 2.6-.03.03c-.01 0-.02 0-.03.01l-3.73 2.72a.72.72 0 0 1-.44.14c-.23 0-.46-.1-.61-.3a.75.75 0 0 1 .17-1.05l3.1-2.26c-.7-.68-1.66-1.07-2.66-1.07-2.17 0-3.94 1.77-3.94 3.94a3.94 3.94 0 0 0 3.94 3.93c1.71 0 3.21-1.09 3.73-2.72.13-.4.55-.61.94-.49.4.13.62.55.49.94"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTargetBulk;
