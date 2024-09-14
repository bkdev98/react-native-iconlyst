import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUsersGroupBulk = ({
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
      d="M12.448 15c-4.1 0-5 1.6-5 3.1.1 1.2.9 1.9 2 1.9h6c1.2 0 2-.8 2-2 0-1.4-.9-3-5-3M12.448 13.698c1.6 0 2.8-1.2 2.8-2.8s-1.2-2.8-2.8-2.8-2.8 1.2-2.8 2.8c0 1.5 1.3 2.8 2.8 2.8"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.548 10.1q-.3 0-.6.3c-.1.2-.2.4-.2.6.1 1.1 0 2.1-.4 3-.1.2-.1.5.1.7.1.2.4.3.6.3h2.9c1.1 0 1.9-.9 1.9-2.1.1-1.9-1.3-2.8-4.3-2.8M6.748 8.8c1.3 0 2.4-1.1 2.4-2.4S8.048 4 6.748 4s-2.4 1.1-2.4 2.4 1.1 2.4 2.4 2.4M17.848 8.8c1.3 0 2.4-1.1 2.4-2.4s-1.1-2.4-2.4-2.4-2.4 1.1-2.4 2.4 1.1 2.4 2.4 2.4M8.148 13.9c-.4-1-.5-1.9-.4-3 0-.2 0-.4-.2-.6q-.15-.3-.6-.3c-3 0-4.5 1-4.5 2.8 0 1.2.9 2.1 2 2.1h2.9c.2 0 .5-.1.6-.3.3-.2.3-.4.2-.7" />
    </G>
  </Svg>
);
export default IconlystUsersGroupBulk;
