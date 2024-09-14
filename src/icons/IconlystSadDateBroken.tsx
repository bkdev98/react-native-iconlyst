import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSadDateBroken = ({
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
      d="M16.691 3v3.223M8.867 3v3.223M10.908 17.418a2.38 2.38 0 0 1 1.871-.906c.758 0 1.434.354 1.871.906M15.753 13.138v.636M9.806 13.138v.636"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.7 4.487h.565c2.64 0 4.277 1.466 4.269 4.16v8.182c0 2.696-1.636 4.17-4.277 4.17H8.301c-2.633 0-4.277-1.5-4.277-4.237V8.649c0-1.95.86-3.256 2.331-3.83M4.024 9.665H18.22M8.866 4.488h4.755"
    />
  </Svg>
);
export default IconlystSadDateBroken;
