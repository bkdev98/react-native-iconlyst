import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitbucketOutline = ({
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
      d="M2.86 4.222A2.75 2.75 0 0 1 5.002 3.2h13.998a2.75 2.75 0 0 1 2.682 3.36l-2.733 12a2.75 2.75 0 0 1-2.681 2.14H7.595a2.75 2.75 0 0 1-2.688-2.169l-2.594-12 .733-.158-.733.158a2.75 2.75 0 0 1 .548-2.308m2.141.477a1.25 1.25 0 0 0-1.222 1.514l2.594 12a1.25 1.25 0 0 0 1.222.986h8.672a1.25 1.25 0 0 0 1.218-.972l2.733-12A1.25 1.25 0 0 0 19 4.699z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m9.885 9.75.75 4.5h2.73l.75-4.5zm-1.528-.044A1.25 1.25 0 0 1 9.59 8.25h4.82c.772 0 1.36.694 1.233 1.456l-.834 5a1.25 1.25 0 0 1-1.233 1.044h-3.152a1.25 1.25 0 0 1-1.234-1.044z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitbucketOutline;
