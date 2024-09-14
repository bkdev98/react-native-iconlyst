import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBankCardLight = ({
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
      d="M21 8.469V6.892A3.89 3.89 0 0 0 17.107 3H15.85M3 8.469V6.892A3.89 3.89 0 0 1 6.893 3h1.289M3 15.531v1.577A3.89 3.89 0 0 0 6.893 21H8.15M21 15.531v1.577A3.89 3.89 0 0 1 17.107 21h-1.289"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.782 7.875H9.216c-1.347 0-2.19.953-2.19 2.303v3.641c0 1.349.84 2.303 2.19 2.303h5.566c1.351 0 2.191-.954 2.191-2.303v-3.641c0-1.35-.84-2.303-2.19-2.303"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.025 11.11h9.948"
    />
  </Svg>
);
export default IconlystScanBankCardLight;
