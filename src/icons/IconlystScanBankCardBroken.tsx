import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScanBankCardBroken = ({
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
      d="M21.25 8.469V6.892A3.89 3.89 0 0 0 17.355 3H16.1M3.25 8.469V6.892A3.89 3.89 0 0 1 7.143 3h1.289M3.25 15.531v1.577A3.89 3.89 0 0 0 7.143 21H8.4M21.25 15.531v1.577A3.89 3.89 0 0 1 17.357 21h-1.289M9.466 16.122c-1.35 0-2.19-.954-2.19-2.303v-3.641c0-1.35.843-2.303 2.19-2.303h5.566c1.351 0 2.191.953 2.191 2.303v3.641c0 1.349-.84 2.303-2.19 2.303h-2.784M7.275 11.11h7.226"
    />
  </Svg>
);
export default IconlystScanBankCardBroken;
