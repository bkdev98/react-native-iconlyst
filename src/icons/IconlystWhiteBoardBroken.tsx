import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhiteBoardBroken = ({
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
      d="M20.934 13.473a3.76 3.76 0 0 1-3.76 3.76h-9.28a3.76 3.76 0 0 1-3.761-3.76V8.38a3.76 3.76 0 0 1 3.76-3.76h9.28a3.76 3.76 0 0 1 3.76 3.76v1.713M12.533 3v1.629M16.206 21l-3.672-3.74L8.861 21"
    />
  </Svg>
);
export default IconlystWhiteBoardBroken;
