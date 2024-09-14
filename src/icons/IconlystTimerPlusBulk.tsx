import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerPlusBulk = ({
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
      d="M7.367 4.402a.75.75 0 1 0-.788-1.276 11.6 11.6 0 0 0-3.47 3.305.75.75 0 0 0 1.239.846 10.1 10.1 0 0 1 3.019-2.875M22.348 6.432a11.5 11.5 0 0 0-3.481-3.317.751.751 0 0 0-.785 1.279 10 10 0 0 1 3.027 2.883.747.747 0 0 0 1.042.197.75.75 0 0 0 .197-1.042M15.281 13.785h-1.81v1.81c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.81h-1.8c-.42 0-.75-.34-.75-.75 0-.42.33-.75.75-.75h1.8v-1.8c0-.41.34-.75.75-.75s.75.34.75.75v1.8h1.81a.749.749 0 1 1 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimerPlusBulk;
