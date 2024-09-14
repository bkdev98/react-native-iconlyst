import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftLight = ({
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
      d="M11.996 7.142H8.393c-1.105 0-2.001-.927-2.001-2.07C6.392 3.926 7.288 3 8.393 3c2.802 0 3.603 4.142 3.603 4.142M11.996 7.142H15.6c1.105 0 2.001-.927 2.001-2.07C17.6 3.926 16.704 3 15.6 3c-2.802 0-3.603 4.142-3.603 4.142"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.123 7.145h9.745c2.152 0 3.494 1.602 3.494 3.866v6.121c0 2.264-1.35 3.867-3.494 3.867H7.123c-2.152 0-3.484-1.603-3.484-3.867v-6.12c0-2.265 1.332-3.867 3.484-3.867"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.938 7.164v6.699l2.058-.68h.01l2.059.67-.01-6.708"
    />
  </Svg>
);
export default IconlystGiftLight;
