import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChromeOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 9.148a2.85 2.85 0 1 0 0 5.7 2.85 2.85 0 0 0 0-5.7m-4.35 2.85a4.35 4.35 0 1 1 8.7 0 4.35 4.35 0 0 1-8.7 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.49 13.151a.75.75 0 0 1 .275 1.025l-4.122 7.145a.75.75 0 1 1-1.3-.75l4.123-7.145a.75.75 0 0 1 1.025-.275M4.38 6.007a.75.75 0 0 1 1.025.274l4.132 7.145a.75.75 0 0 1-1.3.751l-4.13-7.145a.75.75 0 0 1 .274-1.025M11.25 8.398a.75.75 0 0 1 .75-.75h8.253a.75.75 0 1 1 0 1.5H12a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChromeOutline;
