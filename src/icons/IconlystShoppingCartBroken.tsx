import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShoppingCartBroken = ({
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
      d="m15.272 16.368.405-5.856M10.235 6.997l.648 9.37M7.238 20.245v.118m.479-.092a.482.482 0 1 1-.963 0 .482.482 0 0 1 .963 0M18.262 20.245v.118m.479-.092a.482.482 0 1 1-.964 0 .482.482 0 0 1 .963 0M3 3.246l2.024.35.937 11.163c.075.911.837 1.611 1.751 1.609h5.072M13.256 6.996c3.14.002 6.6.005 6.627.01a1.304 1.304 0 0 1 1.104 1.477l-.923 6.381a1.75 1.75 0 0 1-1.737 1.504H15.42M10.235 6.995 5.35 6.992"
    />
  </Svg>
);
export default IconlystShoppingCartBroken;
