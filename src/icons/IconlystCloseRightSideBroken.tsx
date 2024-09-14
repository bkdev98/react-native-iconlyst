import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseRightSideBroken = ({
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
      d="M3.25 12V8.026C3.25 5.081 5.085 3 8.033 3h8.435c2.94 0 4.782 2.081 4.782 5.026v7.948c0 2.945-1.834 5.026-4.782 5.026H8.034c-2.949 0-4.784-2.081-4.784-5.026v-.353M16.718 10.127l-3.745 3.745m0-3.745 3.745 3.745M8.792 21V3"
    />
  </Svg>
);
export default IconlystCloseRightSideBroken;
