import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStickerAddTwoTone = ({
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
      d="M4.582 10.577v5.597c0 2.769 1.733 4.725 4.495 4.725h5.943c.619 0 1.212-.253 1.64-.7l4.207-4.381c.406-.423.633-.988.633-1.575V8.705c0-2.768-1.724-4.724-4.496-4.724H10.95"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.555 20.831v-3.209a2.84 2.84 0 0 1 2.832-2.84h3.04M15.255 9.785H9.208m3.757 4.486H9.207"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.744 3.102V7.59M7.99 5.347H3.5"
    />
  </Svg>
);
export default IconlystStickerAddTwoTone;
