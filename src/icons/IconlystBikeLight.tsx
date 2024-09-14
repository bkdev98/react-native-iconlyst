import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBikeLight = ({
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
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M6.37 18.793a3.12 3.12 0 1 0 0-6.239 3.12 3.12 0 0 0 0 6.239M18.13 18.793a3.12 3.12 0 1 0 0-6.239 3.12 3.12 0 0 0 0 6.239"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M16.318 9.942h-5.92l-3.57 5.083M9.489 15.674h5.524M17.972 15.166l-2.706-9.02 2.208-.94M10.156 7.471H7.534M10.4 9.942l-1.804-2.47"
    />
  </Svg>
);
export default IconlystBikeLight;
