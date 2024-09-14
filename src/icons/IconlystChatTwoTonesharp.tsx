import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatTwoTonesharp = ({
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
      strokeWidth={1.5}
      d="M18.798 18.523a9.2 9.2 0 0 1-6.723 2.7C8.78 21.154 3 21.205 3 21.205l2.025-3.229s-1.977-2.936-1.977-5.97a9.2 9.2 0 0 1 2.704-6.53c3.599-3.601 9.447-3.601 13.046-.001 3.606 3.606 3.6 9.449 0 13.049Z"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M8.565 12.38h-.1M12.299 12.38H12.2M16.033 12.38h-.099"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystChatTwoTonesharp;
