import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart4Broken = ({
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
      d="M20.593 10.36c.452 4.577-3.031 7.625-7.289 8.136a.51.51 0 0 0-.458.503v1.482a.513.513 0 0 1-.64.5c-4.255-1.207-8.098-5.104-7.878-9.83.226-4.809 4.144-8.655 9.105-8.097 2.54.285 4.743 1.796 6.022 3.907"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.477 14.823s2.482-1.362 3.037-3.129c.357-1.116-.063-2.39-1.233-2.767a2.01 2.01 0 0 0-1.804.304 2 2 0 0 0-1.808-.304c-1.17.377-1.588 1.651-1.23 2.767.165.516.488.995.864 1.415"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart4Broken;
