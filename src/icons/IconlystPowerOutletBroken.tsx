import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPowerOutletBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.37 21.137H8.544c-2.948 0-4.782-2.082-4.782-5.027V8.163c0-2.945 1.843-5.026 4.782-5.026h8.435c2.948 0 4.783 2.08 4.783 5.026v7.947c0 2.945-1.835 5.027-4.784 5.027h-.896"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.761 6.918a5.22 5.22 0 1 0 3.043.978M11.046 13.285v-.515m3.43.515v-.515m-1.715-2.082v-.516"
    />
  </Svg>
);
export default IconlystPowerOutletBroken;
