import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetamaskBroken = ({
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
      d="M4.029 19.183c.118.591.728.945 1.3.755l2.971-.99a1 1 0 0 1 .871.116l1.597 1.064c.164.11.358.169.556.169h2.401c.198 0 .392-.059.556-.169l1.597-1.064a1 1 0 0 1 .87-.117l2.972.99a1.003 1.003 0 0 0 1.3-.754l.477-2.385a1 1 0 0 0-.032-.514l-1.224-3.673a1 1 0 0 1 .241-1.024l.577-.577c.27-.27.27-.71 0-.98a.7.7 0 0 1-.19-.626l.636-3.175c.03-.146.026-.296-.01-.44l-.377-1.505a1.003 1.003 0 0 0-1.47-.628l-1.56.891M3.584 16.284l1.224-3.673a1 1 0 0 0-.241-1.024l-.577-.577a.693.693 0 0 1 0-.98.7.7 0 0 0 .189-.626L3.544 6.23a1 1 0 0 1 .01-.44l.377-1.505a1.003 1.003 0 0 1 1.47-.628l3.885 2.22a1 1 0 0 0 .496.132h5.75M12.525 18.041v2.256"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.286 18.794-1.965-3.275a1 1 0 0 0-.857-.486h-1.876a1 1 0 0 0-.857.486l-.837 1.394M11.022 15.033l-.752-6.017-.752-3.008M15.533 6.008l-.752 3.008-.376 3.008M5.004 12.024l2.632-1.504M14.781 9.016l2.632 1.504M8.2 13.905l-.47-.188M16.85 13.905l.47-.188"
    />
  </Svg>
);
export default IconlystMetamaskBroken;
