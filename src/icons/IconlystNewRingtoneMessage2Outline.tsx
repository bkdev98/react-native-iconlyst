import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNewRingtoneMessage2Outline = ({
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
      fill={props.color}
      d="M17.723 18.135H6.779a3.03 3.03 0 0 1-2.745-4.323l.466-.991a4.6 4.6 0 0 0 .433-1.936V9.566A7.325 7.325 0 0 1 12.25 2.25a.75.75 0 1 1 0 1.5 5.823 5.823 0 0 0-5.817 5.816v1.319c-.001.89-.198 1.77-.577 2.575l-.464.99a1.532 1.532 0 0 0 1.387 2.185h10.944a1.533 1.533 0 0 0 1.386-2.185l-.465-.991a6.1 6.1 0 0 1-.576-2.574V9.567a.751.751 0 0 1 1.279-.531c.14.14.22.331.22.53v1.318c.001.67.149 1.33.433 1.937l.466.991a3.033 3.033 0 0 1-2.744 4.323"
    />
    <Path
      fill={props.color}
      d="M16.768 7.795a2.48 2.48 0 1 1 0-4.961 2.48 2.48 0 0 1 0 4.961m0-3.46a.98.98 0 1 0 0 1.96.98.98 0 0 0 0-1.96M12.252 21.75a3.854 3.854 0 0 1-3.849-3.85.75.75 0 1 1 1.5 0 2.35 2.35 0 0 0 4.7 0 .75.75 0 1 1 1.5 0 3.854 3.854 0 0 1-3.85 3.85"
    />
  </Svg>
);
export default IconlystNewRingtoneMessage2Outline;
