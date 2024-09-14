import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatBrokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M18.798 5.474c3.606 3.606 3.599 9.449 0 13.049a9.2 9.2 0 0 1-6.723 2.7c-3.296-.07-9.075-.02-9.075-.02l2.025-3.227s-1.977-2.937-1.977-5.971a9.2 9.2 0 0 1 2.704-6.53 9.22 9.22 0 0 1 8.286-2.532M8.565 12.38h-.099M12.3 12.38h-.1M16.033 12.38h-.098"
    />
  </Svg>
);
export default IconlystChatBrokensharp;
