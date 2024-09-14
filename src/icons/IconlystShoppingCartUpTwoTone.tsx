import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartUpTwoTone = ({
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
      d="M3.5 3.148h1.997L8.15 14.381a2.24 2.24 0 0 0 2.385 1.714l6.937-.643a2.48 2.48 0 0 0 2.146-1.75l1.833-6.004a1.11 1.11 0 0 0-1.072-1.435l-2.845.114"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.2 5.578v3.565a2.453 2.453 0 0 0 2.453 2.454h1.3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.094 7.383-1.895-1.895-1.894 1.895"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.367 20.347v.118m.479-.093a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0M18.578 20.347v.118m.479-.093a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShoppingCartUpTwoTone;
