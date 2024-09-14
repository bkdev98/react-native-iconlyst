import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardWalletDoubleLight = ({
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
      d="M16.217 3H7.782C4.842 3 3 5.081 3 8.026v7.948C3 18.919 4.834 21 7.782 21h8.434C19.165 21 21 18.919 21 15.974V8.026C21 5.081 19.165 3 16.217 3"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.38 9.35V8.5c0-1.277-.791-2.18-2.077-2.18H9.697c-1.277 0-2.079.903-2.079 2.18v.85M5.839 9.35h12.324M16.38 15.698v-.61c0-1.279-.791-2.182-2.077-2.182H9.697c-1.277 0-2.079.903-2.079 2.182v.61"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.159 15.695h-4.204v.03A1.95 1.95 0 0 1 12 17.68a1.95 1.95 0 0 1-1.956-1.955v-.03H5.841"
    />
  </Svg>
);
export default IconlystCardWalletDoubleLight;
