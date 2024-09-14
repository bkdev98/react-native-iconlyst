import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerBold = ({
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
      d="M15.362 15.705a.74.74 0 0 1-1.03.26l-2.73-1.64a.74.74 0 0 1-.37-.64v-3.53a.749.749 0 1 1 1.5 0v3.1l2.37 1.43c.36.21.48.67.26 1.02m-3.21-10.67c-4.4 0-7.98 3.58-7.98 7.98s3.58 7.98 7.98 7.98 7.98-3.58 7.98-7.98-3.58-7.98-7.98-7.98M6.796 4.402a.75.75 0 1 0-.788-1.276 11.6 11.6 0 0 0-3.47 3.305.75.75 0 0 0 1.24.846 10.1 10.1 0 0 1 3.018-2.875M21.778 6.432a11.5 11.5 0 0 0-3.481-3.317.751.751 0 0 0-.785 1.279 10 10 0 0 1 3.027 2.883.747.747 0 0 0 1.042.197.75.75 0 0 0 .197-1.042"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimerBold;