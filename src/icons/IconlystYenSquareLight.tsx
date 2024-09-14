import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYenSquareLight = ({
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
      d="M7.783 3.063h8.435c2.948 0 4.782 2.08 4.782 5.026v7.947c0 2.945-1.834 5.026-4.783 5.026H7.783C4.835 21.063 3 18.983 3 16.037V8.09c0-2.945 1.844-5.026 4.783-5.026M9.499 12.17h5.006M12 16.459v-4.291"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.14 8.594 12 12.172l2.86-3.578"
    />
  </Svg>
);
export default IconlystYenSquareLight;
