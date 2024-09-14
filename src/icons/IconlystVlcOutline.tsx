import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVlcOutline = ({
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
      d="M12 4.25a1.24 1.24 0 0 0-1.172.833v.002L7.57 14.39v.001a1.26 1.26 0 0 0 .67 1.565 9.3 9.3 0 0 0 7.519 0c.595-.269.886-.949.67-1.565l-.001-.001-3.257-9.307A1.24 1.24 0 0 0 12 4.25m-2.588.34a2.74 2.74 0 0 1 5.176 0l3.256 9.303a2.76 2.76 0 0 1-1.471 3.432l-.004.001a10.8 10.8 0 0 1-8.738 0l-.004-.001a2.76 2.76 0 0 1-1.471-3.431z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.113 11.22a.75.75 0 0 1 1.027-.264c2.472 1.46 5.268 1.493 7.718.005a.75.75 0 1 1 .779 1.281c-2.943 1.788-6.331 1.735-9.26.005a.75.75 0 0 1-.264-1.027M8.564 7.08a.75.75 0 0 1 1.007-.332c1.6.807 3.259.81 4.857 0a.75.75 0 0 1 .677 1.34c-2.025 1.024-4.187 1.02-6.21 0a.75.75 0 0 1-.331-1.008"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.928 15.745a2.75 2.75 0 0 1 2.644-1.995h1.19a.75.75 0 0 1 0 1.5h-1.19a1.25 1.25 0 0 0-1.201.907l-.572 2a1.25 1.25 0 0 0 1.202 1.593h13.998a1.25 1.25 0 0 0 1.202-1.593l.72-.206-.72.206-.572-2a1.25 1.25 0 0 0-1.202-.907h-1.201a.75.75 0 1 1 0-1.5h1.201a2.75 2.75 0 0 1 2.644 1.995l-.72.206.72-.207.572 2a2.75 2.75 0 0 1-2.644 3.506H5a2.75 2.75 0 0 1-2.644-3.506l.72.207-.72-.207z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVlcOutline;
