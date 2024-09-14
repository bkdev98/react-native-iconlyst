import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPointingLeftBulk = ({
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
      fillRule="evenodd"
      d="M12.154 19.536c2.726 1.01 6.335.015 8.106-1.755 2.257-2.258 2.43-8.57-.14-10.637-1.63-1.31-3.61-2.33-5.383-2.973-.951-.344-1.977.161-2.34 1.106a1.94 1.94 0 0 0 .71 2.29l1.842 1.27H4.773a1.773 1.773 0 0 0-.026 3.547l4.589.07c.237 2.483.108 6.078 2.818 7.082"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPointingLeftBulk;
