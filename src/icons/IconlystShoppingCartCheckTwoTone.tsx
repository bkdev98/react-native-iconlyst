import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartCheckTwoTone = ({
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
      d="m3.5 3.246 2.024.35.937 11.163c.075.911.837 1.611 1.751 1.609h10.614a1.75 1.75 0 0 0 1.737-1.505l.923-6.38a1.304 1.304 0 0 0-1.104-1.478C20.32 6.995 5.85 6.99 5.85 6.99"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.624 11.635 1.339 1.338 2.676-2.676"
      opacity={0.4}
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M7.79 20.245v.118m.479-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0M18.813 20.245v.118m.48-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .963 0" />
    </G>
  </Svg>
);
export default IconlystShoppingCartCheckTwoTone;
