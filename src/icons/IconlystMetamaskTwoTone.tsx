import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetamaskTwoTone = ({
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
      d="m20.482 11.587.577-.577c.27-.27.27-.71 0-.98a.7.7 0 0 1-.19-.626l.636-3.175c.03-.146.026-.296-.01-.44l-.377-1.505a1.003 1.003 0 0 0-1.47-.628l-3.885 2.22a1 1 0 0 1-.496.132H9.782a1 1 0 0 1-.496-.132L5.4 3.656a1.003 1.003 0 0 0-1.47.628l-.377 1.505c-.036.144-.04.294-.01.44l.635 3.175a.7.7 0 0 1-.19.626c-.27.27-.27.71 0 .98l.578.577a1 1 0 0 1 .241 1.024l-1.224 3.673a1 1 0 0 0-.032.514l.477 2.385c.118.591.728.945 1.3.755l2.971-.99a1 1 0 0 1 .871.116l1.597 1.064c.164.11.358.169.556.169h2.4c.199 0 .392-.059.557-.169l1.597-1.064a1 1 0 0 1 .87-.117l2.971.99a1.003 1.003 0 0 0 1.3-.754l.478-2.385a1 1 0 0 0-.032-.514l-1.224-3.673a1 1 0 0 1 .241-1.024M12.525 18.041v2.256"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m16.286 18.794-1.965-3.275a1 1 0 0 0-.857-.486h-1.876a1 1 0 0 0-.857.486l-1.965 3.275"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.518 6.008.752 3.008.752 6.017h3.007l.752-6.017.752-3.008"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.004 12.024 5.264-3.008M20.046 12.024 14.78 9.016"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m8.2 13.905-.47-.188M16.85 13.905l.47-.188"
    />
  </Svg>
);
export default IconlystMetamaskTwoTone;
