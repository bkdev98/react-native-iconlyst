import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystEmailOpen2Outline = ({
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
      d="M7.808 21.507A5.38 5.38 0 0 1 3.9 20.052a5.06 5.06 0 0 1-1.4-3.686v-5.845a3.81 3.81 0 0 1 1.634-3.129L10.293 3.1a3.435 3.435 0 0 1 3.914 0l6.16 4.293A3.81 3.81 0 0 1 22 10.521v5.845a5.06 5.06 0 0 1-1.4 3.686 5.38 5.38 0 0 1-3.91 1.455zm.02-1.5h8.856a3.93 3.93 0 0 0 2.852-1.02 3.6 3.6 0 0 0 .961-2.624v-5.845a2.31 2.31 0 0 0-.99-1.9l-6.16-4.293a1.94 1.94 0 0 0-2.2 0l-6.16 4.293a2.31 2.31 0 0 0-.99 1.9v5.845a3.6 3.6 0 0 0 .962 2.624 4.1 4.1 0 0 0 2.869 1.02"
    />
    <Path
      fill={props.color}
      d="M12.274 15.794c-.93 0-1.834-.315-2.563-.894l-6.55-5.278a.75.75 0 0 1 .941-1.168l6.546 5.273a2.615 2.615 0 0 0 3.255 0l6.492-5.267a.75.75 0 1 1 .947 1.164l-6.5 5.273a4.12 4.12 0 0 1-2.568.897"
    />
  </Svg>
);
export default IconlystEmailOpen2Outline;
