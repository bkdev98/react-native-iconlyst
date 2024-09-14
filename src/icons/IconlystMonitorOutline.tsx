import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMonitorOutline = ({
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
      d="M16.956 20.787a.75.75 0 0 1 .75-.75h1.812a.75.75 0 0 1 0 1.5h-1.812a.75.75 0 0 1-.75-.75M4.219 20.79a.75.75 0 0 1 .75-.75h8.983a.75.75 0 1 1 0 1.5H4.97a.75.75 0 0 1-.75-.75M3.668 3.756c.778-.834 1.881-1.295 3.17-1.295h10.824c1.29 0 2.395.46 3.172 1.296C21.606 4.585 22 5.722 22 6.98v5.963c0 1.26-.394 2.396-1.166 3.225-.778.835-1.882 1.296-3.173 1.296H6.837c-1.29 0-2.395-.461-3.172-1.296-.771-.83-1.165-1.966-1.165-3.225V6.98c0-1.26.396-2.396 1.168-3.225M4.766 4.78C4.296 5.284 4 6.033 4 6.981v5.963c0 .95.294 1.699.763 2.203.464.498 1.154.818 2.074.818h10.824c.92 0 1.611-.32 2.075-.818.47-.505.764-1.254.764-2.203V6.98c0-.95-.294-1.698-.764-2.202-.464-.498-1.154-.818-2.074-.818H6.837c-.916 0-1.607.32-2.071.818"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMonitorOutline;
