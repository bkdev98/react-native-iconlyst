import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSignOutBulk = ({
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
      d="M22.298 9.7c0-.1-.1-.2-.2-.3l-1.9-1.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.2.2h-2.3c-.6 0-1 .4-1 1s.4 1 1 1h2.3l-.2.2c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l1.9-1.9c.1-.1.1-.2.2-.3 0-.1.1-.2.1-.4 0-.1 0-.3-.1-.4M10.398 11.8c2.3 0 4-1.8 4-4 0-2.3-1.8-4.1-4-4.1s-4.1 1.8-4.1 4.1c0 2.2 1.8 4 4.1 4"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.698 14.5c-1.4-.5-3.2-.7-5.3-.8-2.1 0-4 .2-5.3.8-.7.3-1.2.7-1.6 1.2s-.6 1.2-.6 1.9.3 1.4.8 1.9 1.2.8 2 .8h9.4c.8 0 1.5-.3 2-.8s.8-1.2.8-1.9-.2-1.4-.6-1.9-1-.9-1.6-1.2"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSignOutBulk;
