import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetamaskLight = ({
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
      d="m19.983 11.587.577-.577c.27-.27.27-.71 0-.98a.7.7 0 0 1-.19-.626l.636-3.175c.029-.146.026-.296-.01-.44l-.377-1.505a1.003 1.003 0 0 0-1.47-.628l-3.885 2.22a1 1 0 0 1-.496.132H9.283a1 1 0 0 1-.496-.132l-3.885-2.22a1.003 1.003 0 0 0-1.47.628l-.377 1.505c-.036.144-.04.294-.01.44l.635 3.175a.7.7 0 0 1-.19.626c-.27.27-.27.71 0 .98l.578.577a1 1 0 0 1 .241 1.024l-1.224 3.673a1 1 0 0 0-.032.514l.477 2.385c.118.591.728.945 1.3.755l2.971-.99a1 1 0 0 1 .871.116l1.597 1.064c.164.11.358.169.556.169h2.4c.199 0 .392-.059.557-.169l1.597-1.064a1 1 0 0 1 .87-.117l2.972.99a1.003 1.003 0 0 0 1.3-.754l.477-2.385a1 1 0 0 0-.032-.514L19.74 12.61a1 1 0 0 1 .242-1.024M12.025 18.041v2.256"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15.786 18.794-1.965-3.275a1 1 0 0 0-.857-.486h-1.876a1 1 0 0 0-.857.486l-1.965 3.275M9.018 6.008l.752 3.008.752 6.017M15.033 6.008l-.752 3.008-.752 6.017M4.504 12.024l5.264-3.008M19.546 12.024 14.28 9.016M7.7 13.905l-.47-.188M16.35 13.905l.47-.188"
    />
  </Svg>
);
export default IconlystMetamaskLight;
