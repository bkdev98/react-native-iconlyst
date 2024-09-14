import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrill2Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 8.547h7.365a7.365 7.365 0 0 1-14.73 0h3.683M9.553 15.492 7.723 21M14.499 15.492 16.329 21M8.47 19.176h4.672M8.661 4.574a1.113 1.113 0 0 0 0 1.573M12.161 3a1.11 1.11 0 0 1 0 1.572 1.113 1.113 0 0 0 0 1.573M15.661 4.574a1.113 1.113 0 0 0 0 1.573"
    />
  </Svg>
);
export default IconlystGrill2Broken;
