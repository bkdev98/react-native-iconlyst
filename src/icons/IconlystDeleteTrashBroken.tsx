import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteTrashBroken = ({
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
      d="m18.82 8.94-.798 9.73a2.7 2.7 0 0 1-2.69 2.48H9.167a2.7 2.7 0 0 1-2.691-2.48L5.68 8.94M12.02 21.164 6.192 15.06M17.154 20.442l-7.894-8.43M7.204 20.303l4.898-5.266m1.673-1.856 4.04-4.224M6.193 15.067l6.085-6.128M12.535 21.164l5.784-6.105M18.318 15.067l-6.04-6.128"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.172 3.847.785 1.6h2.589c.795 0 1.44.646 1.44 1.442V8.94H4.515V6.889c0-.796.645-1.441 1.44-1.441h2.589l.785-1.601a1.5 1.5 0 0 1 1.347-.84h3.15a1.5 1.5 0 0 1 1.347.84"
    />
  </Svg>
);
export default IconlystDeleteTrashBroken;
