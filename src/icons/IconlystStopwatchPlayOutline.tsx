import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchPlayOutline = ({
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
      d="M12.207 6.414a6.88 6.88 0 0 0 0 13.758.75.75 0 0 1 0 1.5 8.38 8.38 0 1 1 8.38-8.379.75.75 0 0 1-1.5 0 6.88 6.88 0 0 0-6.88-6.879"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.363 3a.75.75 0 0 1 .75-.75h4.19a.75.75 0 1 1 0 1.5h-4.19a.75.75 0 0 1-.75-.75M15.656 9.808a.75.75 0 0 1 0 1.06l-2.928 2.929a.75.75 0 0 1-1.061-1.06l2.928-2.93a.75.75 0 0 1 1.061 0M16.564 17.158c-.1.89-.102 1.85 0 2.862.022.16.084.202.1.21.017.01.106.05.3-.026a7 7 0 0 0 2.023-1.282c.155-.144.184-.266.184-.338s-.032-.192-.182-.328l-.003-.004a6.8 6.8 0 0 0-2.029-1.283l-.007-.003c-.149-.064-.241-.038-.277-.018-.026.013-.088.055-.11.21m.97-1.574c-.507-.214-1.077-.22-1.563.038-.498.264-.819.756-.896 1.348l-.001.013a15 15 0 0 0 0 3.198l.001.016c.069.557.354 1.057.847 1.337.49.279 1.068.274 1.599.063l.006-.002A8.5 8.5 0 0 0 20 20.028l.004-.004c.417-.387.669-.895.666-1.448-.003-.55-.258-1.05-.668-1.426a8.3 8.3 0 0 0-2.47-1.566"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchPlayOutline;
