import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatCodeBroken = ({
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
      d="M12.25 3.36H7.19a3.94 3.94 0 0 0-3.94 3.939v6.915a3.94 3.94 0 0 0 3.94 3.94h1.068c.572 0 1.12.226 1.526.63l1.421 1.422a1.48 1.48 0 0 0 2.09 0l1.422-1.421a2.16 2.16 0 0 1 1.526-.632h1.068a3.94 3.94 0 0 0 3.939-3.94V7.3a3.94 3.94 0 0 0-3.939-3.94h-1.523"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.105 8.885 6.82 11.17l2.286 2.286M15.395 8.885l2.287 2.286-2.287 2.286M13.07 8.885l-1.637 4.572"
    />
  </Svg>
);
export default IconlystChatCodeBroken;
