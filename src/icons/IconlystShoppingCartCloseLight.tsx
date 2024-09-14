import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartCloseLight = ({
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
      d="m3 3.246 2.024.35.937 11.163c.075.911.837 1.611 1.751 1.609h10.614a1.75 1.75 0 0 0 1.737-1.505l.923-6.38a1.304 1.304 0 0 0-1.104-1.478C19.82 6.995 5.35 6.99 5.35 6.99M14.425 10.438l-2.22 2.22M14.425 12.658l-2.22-2.22M7.238 20.245v.118m.479-.092a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0M18.262 20.245v.118m.479-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .963 0"
    />
  </Svg>
);
export default IconlystShoppingCartCloseLight;
