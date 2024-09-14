import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudDashOutline = ({
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
      d="M18.401 18.623a.75.75 0 0 1-.127 1.053 9.755 9.755 0 0 1-8.149 1.836.75.75 0 1 1 .328-1.464 8.3 8.3 0 0 0 2.425.178 8.2 8.2 0 0 0 4.47-1.73.75.75 0 0 1 1.053.127M3.68 14.892a.75.75 0 0 1 .989.384 8.27 8.27 0 0 0 2.86 3.468.75.75 0 0 1-.854 1.234 9.77 9.77 0 0 1-3.379-4.097.75.75 0 0 1 .384-.989M3.774 8.823a.75.75 0 0 1 .527.921 8.2 8.2 0 0 0-.275 2.781.75.75 0 1 1-1.496.112 9.7 9.7 0 0 1 .323-3.287.75.75 0 0 1 .921-.527M7.053 4.598a.75.75 0 0 1-.09 1.057c-.5.422-.947.898-1.33 1.422a.75.75 0 1 1-1.21-.886A9.7 9.7 0 0 1 5.995 4.51a.75.75 0 0 1 1.057.09M11.864 2.257c5.386-.206 9.92 3.992 10.127 9.378a9.67 9.67 0 0 1-1.457 5.484.75.75 0 1 1-1.276-.79 8.17 8.17 0 0 0 1.234-4.636 8.26 8.26 0 0 0-8.57-7.937.75.75 0 1 1-.058-1.499"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.793 8.73c.503-.664 1.313-1.195 2.458-1.195 1.144 0 1.954.531 2.457 1.195.304.402.499.855.6 1.274.475.108.915.331 1.272.672.524.5.819 1.206.819 2.027a2.77 2.77 0 0 1-1.659 2.541c-.396.16-.787.218-1.098.218H9.855a3 3 0 0 1-1.12-.232 2.77 2.77 0 0 1-1.633-2.527c0-.821.295-1.527.819-2.027a2.7 2.7 0 0 1 1.272-.672c.101-.42.296-.872.6-1.274m1.196.906c-.275.363-.382.802-.382 1.043a.75.75 0 0 1-.743.75c-.39.003-.7.134-.908.332-.201.192-.354.493-.354.942 0 .509.3.951.737 1.154.196.078.388.105.516.105h4.787c.133 0 .325-.026.523-.103.434-.203.734-.645.734-1.156 0-.45-.154-.75-.355-.942-.207-.198-.518-.329-.907-.332a.75.75 0 0 1-.743-.75c0-.241-.107-.68-.382-1.043-.252-.334-.639-.6-1.261-.6-.623 0-1.01.266-1.262.6"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudDashOutline;