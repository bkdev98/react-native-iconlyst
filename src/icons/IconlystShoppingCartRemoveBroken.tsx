import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartRemoveBroken = ({
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
      d="M14.59 11.514h-3.141M7.238 20.245v.118m.479-.092a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0M18.262 20.245v.118m.479-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .963 0M3 3.246l2.024.35.937 11.163c.075.911.837 1.611 1.751 1.609h5.307M12.672 6.996c3.14.002 7.183.005 7.21.01a1.305 1.305 0 0 1 1.105 1.477l-.924 6.381a1.75 1.75 0 0 1-1.736 1.504h-2.654M9.517 6.995l-4.168-.003"
    />
  </Svg>
);
export default IconlystShoppingCartRemoveBroken;
