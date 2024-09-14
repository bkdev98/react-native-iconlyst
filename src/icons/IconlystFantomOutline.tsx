import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFantomOutline = ({
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
      d="M4.098 18.004a.75.75 0 0 1-.75-.75v-2.129a.75.75 0 1 1 1.5 0v2.129a.75.75 0 0 1-.75.75M20.402 8.695a.75.75 0 0 1-.75-.75V5.816a.75.75 0 0 1 1.5 0v2.13a.75.75 0 0 1-.75.75M12.25 21.748c-.427 0-.846-.112-1.216-.325L7.111 19.16a2.44 2.44 0 0 1-1.215-2.1v-4.828a.75.75 0 0 1 .375-.649l4.764-2.75a2.44 2.44 0 0 1 2.43 0l4.762 2.751a.75.75 0 0 1 .375.65v4.827a2.44 2.44 0 0 1-1.215 2.1l-3.923 2.264a2.4 2.4 0 0 1-1.215.324M7.395 12.66v4.4a.93.93 0 0 0 .465.806l3.923 2.264a.93.93 0 0 0 .93 0l3.923-2.264a.93.93 0 0 0 .465-.806v-4.4l-4.388-2.534a.93.93 0 0 0-.93 0z"
    />
    <Path
      fill={props.color}
      d="M12.25 16.165c-.427 0-.846-.111-1.216-.325l-4.763-2.749a.75.75 0 0 1-.375-.649v-5.5a2.44 2.44 0 0 1 1.214-2.1l3.924-2.265a2.44 2.44 0 0 1 2.43 0l3.923 2.266a2.44 2.44 0 0 1 1.215 2.1v5.5a.75.75 0 0 1-.375.65l-4.763 2.748c-.369.213-.788.325-1.215.324M7.395 12.01l4.389 2.532a.93.93 0 0 0 .928 0l4.39-2.532V6.943a.93.93 0 0 0-.466-.806l-3.923-2.266a.94.94 0 0 0-.93 0L7.86 6.136a.94.94 0 0 0-.465.806z"
    />
    <Path
      fill={props.color}
      d="M12.25 16.17a.75.75 0 0 1-.75-.75v-6.1a.75.75 0 1 1 1.5 0v6.1a.75.75 0 0 1-.75.75"
    />
    <Path
      fill={props.color}
      d="M12.249 9.921a2.4 2.4 0 0 1-1.216-.33L7.11 7.333a2.44 2.44 0 0 1-.871-.872.751.751 0 0 1 1.3-.753.94.94 0 0 0 .332.331l3.918 2.256a.92.92 0 0 0 .927 0l3.922-2.263a.9.9 0 0 0 .332-.326.752.752 0 0 1 1.3.756c-.212.36-.513.66-.875.869l-3.923 2.263a2.43 2.43 0 0 1-1.224.327"
    />
  </Svg>
);
export default IconlystFantomOutline;