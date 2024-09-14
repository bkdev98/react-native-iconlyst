import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHappyDateBroken = ({
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
      d="M16.416 3v3.223M8.591 3v3.223M10.632 16.513a2.38 2.38 0 0 0 1.872.905c.758 0 1.434-.354 1.87-.905M15.478 13.138v.636M9.53 13.138v.636"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.424 4.487h.566c2.64 0 4.276 1.466 4.269 4.16v8.182c0 2.696-1.636 4.17-4.277 4.17H8.026c-2.633 0-4.277-1.5-4.277-4.237V8.649c0-1.95.86-3.256 2.33-3.83M3.749 9.665h14.196M8.866 4.488h4.755"
    />
  </Svg>
);
export default IconlystHappyDateBroken;
