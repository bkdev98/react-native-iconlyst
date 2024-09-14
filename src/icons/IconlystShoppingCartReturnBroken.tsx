import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartReturnBroken = ({
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
      d="m3 3.246 2.024.35.937 11.163c.075.911.837 1.611 1.751 1.609h1.443M18.185 6.992s1.635.005 1.697.014a1.304 1.304 0 0 1 1.105 1.478l-.924 6.38a1.75 1.75 0 0 1-1.736 1.505h-5.308M9.348 6.998h3.565a2.453 2.453 0 0 1 2.454 2.453v1.3"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.156 8.892 9.262 6.998l1.894-1.894M7.289 20.245v.118m.479-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0M18.313 20.245v.118m.478-.092a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0"
    />
  </Svg>
);
export default IconlystShoppingCartReturnBroken;
