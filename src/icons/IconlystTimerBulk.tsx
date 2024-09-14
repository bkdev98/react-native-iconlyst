import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerBulk = ({
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
      d="M12.722 5.035c-4.4 0-7.98 3.58-7.98 7.98s3.58 7.98 7.98 7.98 7.98-3.58 7.98-7.98-3.58-7.98-7.98-7.98"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.367 4.402a.75.75 0 1 0-.788-1.276 11.6 11.6 0 0 0-3.47 3.305.75.75 0 0 0 1.239.846 10.1 10.1 0 0 1 3.019-2.875M22.348 6.432a11.5 11.5 0 0 0-3.481-3.317.751.751 0 0 0-.785 1.279 10 10 0 0 1 3.027 2.883.747.747 0 0 0 1.042.197.75.75 0 0 0 .197-1.042"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M15.292 16.075c.25 0 .5-.13.64-.37a.73.73 0 0 0-.26-1.02l-2.37-1.43v-3.1a.749.749 0 1 0-1.5 0v3.53c0 .26.14.51.37.64l2.73 1.64c.12.07.26.11.39.11"
    />
  </Svg>
);
export default IconlystTimerBulk;
