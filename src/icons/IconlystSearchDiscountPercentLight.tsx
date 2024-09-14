import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchDiscountPercentLight = ({
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
      d="M20.06 11.423a8.423 8.423 0 1 0-16.846 0 8.423 8.423 0 0 0 16.846 0M17.361 17.585 20.784 21M9.473 13.587l4.33-4.33m-4.22.058H9.53m4.24 4.212h-.045"
    />
  </Svg>
);
export default IconlystSearchDiscountPercentLight;
