import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThreadsLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.558 8.685c-.315-1.189-.81-2.213-1.484-3.062C16.708 3.9 14.71 3.018 12.135 3h-.01c-2.569.018-4.545.904-5.872 2.632-1.18 1.539-1.79 3.679-1.81 6.362v.012c.02 2.683.63 4.823 1.81 6.362C7.58 20.096 9.556 20.982 12.125 21h.01c2.284-.016 3.894-.629 5.22-1.986 1.74-1.78 1.918-4.712 0-6.423-1.3-1.16-3.267-1.394-5.032-1.29-2.18.128-3.174 1.373-3.112 2.553.159 3.062 3.89 3.322 5.598 1.092 1.11-1.45 1.125-3.364.56-5.101-.953-2.921-4.422-2.894-6.158-.74"
    />
  </Svg>
);
export default IconlystThreadsLight;
