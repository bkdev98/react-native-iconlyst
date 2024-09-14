import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGifFormat2Broken = ({
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
      d="M12.084 19.829H6.151c-2.5 0-4.067-1.77-4.067-4.275V8.451c0-2.504 1.56-4.273 4.067-4.273h11.865c2.508 0 4.068 1.77 4.068 4.273v7.103c0 2.505-1.56 4.274-4.067 4.274h-1.966"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.724 9.125h-3.115v5.751M18.245 12.48h-2.636M12.607 9.125v5.751M9.506 9.345a2.9 2.9 0 0 0-1.163-.303C6.793 8.964 5.51 10.3 5.446 11.85c-.07 1.704 1.061 3.111 2.746 3.111.987 0 1.691-.352 1.691-1.34V12h-1.69"
    />
  </Svg>
);
export default IconlystGifFormat2Broken;
