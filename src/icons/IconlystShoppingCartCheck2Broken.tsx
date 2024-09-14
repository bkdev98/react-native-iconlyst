import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartCheck2Broken = ({
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
      d="m11.725 10.765 1.249 1.25 2.498-2.5M8.863 20.347v.118m.479-.093a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0M18.078 20.347v.118m.479-.093a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0M3 3.148h1.997L7.65 14.381a2.24 2.24 0 0 0 2.385 1.714M16.784 6.29l3.268-.028c.698-.007 1.201.718.997 1.435L19.344 13.7c-.273.965-1.063 1.656-1.997 1.75l-3.227.321M12.854 6.262l-7.025.057"
    />
  </Svg>
);
export default IconlystShoppingCartCheck2Broken;
