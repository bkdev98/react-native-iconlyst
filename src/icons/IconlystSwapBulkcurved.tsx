import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwapBulkcurved = ({
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
      d="M12.253 8.219c-.409-.773-2.572-4.633-4.963-4.633s-4.555 3.86-4.964 4.633a1.001 1.001 0 0 0 1.768.936c.59-1.112 1.454-2.297 2.196-2.983v11.033a1 1 0 1 0 2 0V6.172c.742.687 1.606 1.87 2.195 2.983a1.003 1.003 0 0 0 1.352.416c.488-.26.674-.864.416-1.352"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.758 14.433a1 1 0 0 0-1.352.414c-.588 1.11-1.448 2.292-2.186 2.979V6.796a1 1 0 1 0-2 0V17.83c-.742-.686-1.606-1.87-2.196-2.983a1 1 0 0 0-1.768.937c.409.772 2.572 4.63 4.964 4.63 2.382 0 4.545-3.858 4.954-4.63a1 1 0 0 0-.416-1.352"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSwapBulkcurved;
