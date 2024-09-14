import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystToolsBroken = ({
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
      d="m11.381 16.145 5.898-5.898a2.94 2.94 0 0 0 0-4.157l-2.216-2.215a2.94 2.94 0 0 0-4.157 0L5.009 9.773a2.94 2.94 0 0 0 0 4.157l2.216 2.215a2.94 2.94 0 0 0 4.157 0M3.98 20.986h4.372M17.788 6.762h-4.885m4.37 3.5H4.617m.247 3.5h4.45M12.76 15.03l5.258 5.258a1.91 1.91 0 0 0 2.7 0l.702-.703a1.91 1.91 0 0 0 0-2.7l-3.496-3.496M17.121 19.158l3.17-3.17"
    />
  </Svg>
);
export default IconlystToolsBroken;
