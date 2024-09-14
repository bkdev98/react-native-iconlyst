import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBankCardTwoTone = ({
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
      d="M21.5 8.469V6.892A3.89 3.89 0 0 0 17.607 3H16.35M3.5 8.469V6.892A3.89 3.89 0 0 1 7.393 3h1.289M3.5 15.531v1.577A3.89 3.89 0 0 0 7.393 21H8.65M21.5 15.531v1.577A3.89 3.89 0 0 1 17.607 21h-1.289"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.282 7.875H9.716c-1.347 0-2.19.953-2.19 2.303v3.641c0 1.349.84 2.303 2.19 2.303h5.566c1.351 0 2.191-.954 2.191-2.303v-3.641c0-1.35-.84-2.303-2.19-2.303"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.525 11.11h9.948"
    />
  </Svg>
);
export default IconlystScanBankCardTwoTone;
