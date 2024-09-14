import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGiftTwoTone = ({
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
      d="M17.205 21H7.795c-2.074 0-3.364-1.546-3.364-3.735v-5.3c0-2.189 1.29-3.735 3.365-3.735h9.407c2.075 0 3.365 1.546 3.365 3.736v5.3c0 2.188-1.297 3.734-3.364 3.734"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.363 8.226 7.148 5.888l2.544-2.572 2.358 4.91 2.267 4.426"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.749 8.23 4.101-2.507L14.518 3 12.05 8.228l-2.333 4.241"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGiftTwoTone;
