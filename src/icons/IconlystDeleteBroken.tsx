import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeleteBroken = ({
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
      d="M12.25 9.226h6.885c.555 0 1.004-.45 1.004-1.005V7.133a1.47 1.47 0 0 0-1.469-1.47h-2.64l-.818-1.784A1.51 1.51 0 0 0 13.842 3h-3.185c-.589 0-1.124.343-1.37.879L8.47 5.664H5.83a1.47 1.47 0 0 0-1.469 1.47V8.22c0 .555.45 1.005 1.005 1.005h3.442M5.9 9.3v8.686C5.9 19.652 7.233 21 8.877 21h3.373M18.6 9.3v8.686c0 1.665-1.332 3.014-2.976 3.014"
    />
  </Svg>
);
export default IconlystDeleteBroken;
