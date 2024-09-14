import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStopwatchPauseBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.369 11.026-2.94 2.94c-.14.15-.34.22-.53.22s-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l2.94-2.94c.3-.29.77-.29 1.06 0 .3.29.3.77 0 1.06m-3.46-5.72c-4.5 0-8.16 3.66-8.16 8.16s3.66 8.16 8.16 8.16q.632-.001 1.244-.098c.198-.031.3-.25.218-.434a5.441 5.441 0 0 1 4.997-7.609q.69 0 1.329.163c.187.048.38-.076.389-.27.19-4.375-3.959-8.072-8.177-8.072M9.805 3.874h4.208a.75.75 0 0 0 0-1.5H9.805a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.662 21.275a.75.75 0 0 1-.75-.75v-3.68a.75.75 0 0 1 1.5 0v3.68a.75.75 0 0 1-.75.75M19.501 21.275a.75.75 0 0 1-.75-.75v-3.68a.75.75 0 0 1 1.5 0v3.68a.75.75 0 0 1-.75.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStopwatchPauseBold;
