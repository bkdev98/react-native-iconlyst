import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartReturnTwoTone = ({
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
      d="m3.5 3.246 2.024.35.937 11.163c.075.911.837 1.611 1.751 1.609h10.614a1.75 1.75 0 0 0 1.737-1.505l.923-6.38a1.304 1.304 0 0 0-1.104-1.478c-.062-.01-1.698-.014-1.698-.014"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.847 7h3.565a2.453 2.453 0 0 1 2.454 2.453v1.3"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.656 8.89 9.762 6.996l1.894-1.894"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.789 20.245v.118m.479-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .964 0M18.813 20.245v.118m.478-.092a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystShoppingCartReturnTwoTone;
