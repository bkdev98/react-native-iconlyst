import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlowLikeBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m18.977 5.5-1 1M5.999 18.522l1-1m-1.022-12 1 1M18.999 18.5l-1-1M21.477 12h-1.045m-15.91 0H3.476m9 8v1m0-18v1M15.698 12.327c.378-1.183-.067-2.535-1.308-2.935a2.13 2.13 0 0 0-1.913.323 2.12 2.12 0 0 0-1.916-.323c-1.24.4-1.683 1.752-1.305 2.935.61 1.895 3.221 3.316 3.221 3.316s.73-.4 1.505-1.051"
    />
  </Svg>
);
export default IconlystGlowLikeBroken;
