import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountTagOutline = ({
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
      d="M13.01 21.74a3.8 3.8 0 0 1-2.686-1.129q-3.1-3.087-6.184-6.185a5.35 5.35 0 0 1-1.583-3.355c-.067-.714-.056-2.672-.04-4.45l.004-.654a3.75 3.75 0 0 1 3.08-3.652c.214-.039 1.018-.069 4.8-.053h.317a5.52 5.52 0 0 1 4.02 1.671q3.069 3.065 6.13 6.132a3.747 3.747 0 0 1 .023 5.336 839 839 0 0 1-5.234 5.234 3.76 3.76 0 0 1-2.647 1.104M9.498 3.76c-1.386 0-3.386.005-3.663.035a2.26 2.26 0 0 0-1.814 2.175l-.005.662c-.01 1.17-.03 3.6.034 4.3a3.84 3.84 0 0 0 1.154 2.435q3.081 3.1 6.18 6.18a2.24 2.24 0 0 0 3.221.02 770 770 0 0 0 5.224-5.224 2.236 2.236 0 0 0-.02-3.22 4065 4065 0 0 0-6.127-6.13 4.01 4.01 0 0 0-2.96-1.233z"
    />
    <Path
      fill={props.color}
      d="M12.155 15.92a.75.75 0 0 1-.75-.75V8.634a.75.75 0 1 1 1.5 0v6.538a.75.75 0 0 1-.75.75M8.972 12.872a.976.976 0 0 1 0-1.95.975.975 0 1 1 0 1.95M15.333 12.872a.976.976 0 0 1 0-1.95.975.975 0 1 1 0 1.95"
    />
  </Svg>
);
export default IconlystDiscountTagOutline;
