import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFeatherBroken = ({
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
      d="M7.782 21C4.835 21 3 18.918 3 15.973V8.028c0-2.945 1.844-5.026 4.782-5.026h8.434c2.948 0 4.781 2.08 4.781 5.026v7.946c0 2.945-1.833 5.025-4.782 5.025h-4.216M21 16.086h-5.662"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.402 13.537c2.238.02 3.92-.399 6.158-1.965l-.651-2.257 3.794-.37s1.488-1.39 2.928-3.035"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.965 16.085c0-.127.029-8.22 7.374-13.085"
    />
  </Svg>
);
export default IconlystFeatherBroken;
