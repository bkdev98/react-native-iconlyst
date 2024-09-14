import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMultitaskingBold = ({
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
      fill={props.color}
      d="M9.476 21.032h5.073a3.63 3.63 0 0 0 3.63-3.627V6.596c0-2-1.628-3.628-3.63-3.628H9.477c-2 0-3.629 1.628-3.629 3.628v10.809c0 2 1.628 3.627 3.629 3.627M2.25 19.603a.75.75 0 0 0 1.5 0V4.396a.75.75 0 0 0-1.5 0zM20.25 19.603a.75.75 0 0 0 1.5 0V4.396a.75.75 0 0 0-1.5 0z"
    />
  </Svg>
);
export default IconlystMultitaskingBold;
