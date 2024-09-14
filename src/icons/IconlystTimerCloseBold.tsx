import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTimerCloseBold = ({
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
      d="M6.796 4.374a.749.749 0 1 0-.788-1.276A11.7 11.7 0 0 0 2.54 6.4a.75.75 0 1 0 1.236.849 10.2 10.2 0 0 1 3.02-2.876M21.777 6.4a11.5 11.5 0 0 0-3.485-3.306.75.75 0 0 0-.776 1.284 10 10 0 0 1 3.025 2.873.75.75 0 1 0 1.235-.85M14.465 14.285a.75.75 0 1 1-1.06 1.06l-1.25-1.25-1.252 1.25a.751.751 0 0 1-1.061 0 .75.75 0 0 1 0-1.06l1.251-1.25-1.25-1.25a.749.749 0 1 1 1.06-1.06l1.251 1.25 1.25-1.25a.75.75 0 0 1 1.061 1.06l-1.25 1.25zm-2.312-9.23c-4.4 0-7.98 3.58-7.98 7.98s3.58 7.98 7.98 7.98c4.402 0 7.983-3.58 7.983-7.98s-3.58-7.98-7.983-7.98"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTimerCloseBold;
