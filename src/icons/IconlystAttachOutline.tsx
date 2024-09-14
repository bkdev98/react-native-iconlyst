import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAttachOutline = ({
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
      d="M15.308 5.155a3.81 3.81 0 0 0-5.387 0L5.536 9.54a6.104 6.104 0 0 0 8.633 8.633l6.297-6.298a.732.732 0 1 1 1.036 1.036l-6.297 6.298A7.57 7.57 0 0 1 4.5 8.504L8.886 4.12a5.274 5.274 0 0 1 7.458 7.459l-4.278 4.277a3.026 3.026 0 0 1-4.278-4.278l4.037-4.037a.732.732 0 1 1 1.036 1.036l-4.037 4.037a1.561 1.561 0 0 0 2.207 2.206l4.277-4.277a3.81 3.81 0 0 0 0-5.387"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAttachOutline;
