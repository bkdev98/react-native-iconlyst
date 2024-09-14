import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoLineLight = ({
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
      d="M17.052 21H8.617c-2.948 0-4.783-2.08-4.783-5.026V8.026C3.834 5.081 5.669 3 8.618 3h8.434C20 3 21.834 5.08 21.834 8.026v7.948c0 2.945-1.843 5.026-4.782 5.026M8.266 16.277h3.892M3.84 7.712h17.986m-12.126 0V3m6.266 4.711V3"
    />
  </Svg>
);
export default IconlystVideoLineLight;
