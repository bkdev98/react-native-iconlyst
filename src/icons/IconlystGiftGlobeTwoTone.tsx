import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftGlobeTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 10.604c0-1.607 1.116-2.908 2.491-2.908.593 0 1.074.48 1.074 1.072 0 1.293-1.597 2.343-3.566 2.343s-3.565-1.05-3.565-2.343c0-.593.48-1.072 1.072-1.072 1.377 0 2.492 1.301 2.492 2.908"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.448 13.916 12 11.11l2.552 2.805M12 3.365v14.78M19.796 11.161H4.204"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.644 18.146a7.839 7.839 0 1 0-7.29 0"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m7.58 19.417.793-1.238 7.252-.005.797 1.243c.505.79.758 1.184.738 1.51a1 1 0 0 1-.408.745c-.264.193-.732.193-1.67.193H8.92c-.937 0-1.406 0-1.67-.193a1 1 0 0 1-.407-.745c-.02-.326.233-.72.738-1.51"
    />
  </Svg>
);
export default IconlystGiftGlobeTwoTone;
