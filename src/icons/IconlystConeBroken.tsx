import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConeBroken = ({
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
      d="m4.996 16.093 6.385-12.376c.493-.956 1.746-.956 2.239 0l1.596 3.094M20.005 16.092l-3.192-6.188"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.5 21c-4.352 0-7.88-1.666-7.88-3.72 0-2.053 3.528-3.719 7.88-3.719s7.88 1.666 7.88 3.72c0 1.308-1.431 2.458-3.595 3.121"
    />
  </Svg>
);
export default IconlystConeBroken;
