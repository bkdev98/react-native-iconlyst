import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartRemoveLight = ({
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
      d="M3 3.148h1.997L7.65 14.381a2.24 2.24 0 0 0 2.385 1.714l6.937-.643a2.48 2.48 0 0 0 2.146-1.75l1.833-6.004a1.11 1.11 0 0 0-1.072-1.435l-14.05.114M15.006 10.94h-3.14M8.834 20.347v.118m.479-.093a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0M18.045 20.347v.118m.479-.093a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0"
    />
  </Svg>
);
export default IconlystShoppingCartRemoveLight;
