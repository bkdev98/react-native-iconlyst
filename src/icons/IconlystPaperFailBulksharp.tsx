import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperFailBulksharp = ({
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
      d="M14.54 8.341v-4.66l4.47 4.66zm.49-6.091H4.08v19.5h16.34V7.87z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m13.311 16.908 1.061-1.061-1.747-1.746 1.748-1.748-1.06-1.06-1.748 1.748-1.748-1.748-1.06 1.06 1.747 1.748-1.746 1.746 1.061 1.061 1.746-1.746z"
    />
  </Svg>
);
export default IconlystPaperFailBulksharp;
