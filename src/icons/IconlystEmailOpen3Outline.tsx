import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen3Outline = ({
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
      d="M7.808 21.507A5.38 5.38 0 0 1 3.9 20.05a5.06 5.06 0 0 1-1.4-3.685V10.52a3.81 3.81 0 0 1 1.634-3.129L10.292 3.1a3.44 3.44 0 0 1 3.916 0l6.159 4.293A3.81 3.81 0 0 1 22 10.52v5.845a5.06 5.06 0 0 1-1.4 3.685 5.43 5.43 0 0 1-3.932 1.456zm.02-1.5h8.856a3.93 3.93 0 0 0 2.853-1.02 3.6 3.6 0 0 0 .96-2.624v-5.845a2.31 2.31 0 0 0-.99-1.9l-6.16-4.295a1.94 1.94 0 0 0-2.2 0L4.99 8.616a2.3 2.3 0 0 0-.991 1.9v5.845a3.6 3.6 0 0 0 .96 2.624 4 4 0 0 0 2.87 1.021"
    />
    <Path
      fill={props.color}
      d="M12.274 15.793A4.13 4.13 0 0 1 9.71 14.9l-6.55-5.278a.75.75 0 0 1 .941-1.168l6.544 5.273a2.62 2.62 0 0 0 3.257 0l6.492-5.267a.75.75 0 1 1 .945 1.164l-6.5 5.273a4.12 4.12 0 0 1-2.566.897"
    />
    <Path
      fill={props.color}
      d="M17.17 12.787a.75.75 0 0 1-.75-.75 1.667 1.667 0 0 0-1.9-1.762H9.95a1.657 1.657 0 0 0-1.878 1.761.75.75 0 1 1-1.5 0 3.145 3.145 0 0 1 3.378-3.26h4.572a3.153 3.153 0 0 1 3.4 3.26.75.75 0 0 1-.75.75"
    />
  </Svg>
);
export default IconlystEmailOpen3Outline;
