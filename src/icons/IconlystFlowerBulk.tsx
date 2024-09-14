import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlowerBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m5.742 14.883.136.019-.083.11c-.953 1.313-.515 2.82.37 3.706.886.886 2.393 1.322 3.706.37q.056-.04.11-.083.008.069.019.137c.256 1.602 1.63 2.358 2.883 2.358s2.627-.756 2.882-2.358v-.006l.018-.132q.055.044.111.084c1.314.952 2.82.516 3.706-.37.886-.887 1.323-2.393.37-3.706l-.083-.11.137-.019c1.602-.255 2.359-1.63 2.359-2.883s-.757-2.627-2.359-2.882l-.005-.001-.132-.018.083-.11c.953-1.313.516-2.82-.37-3.706s-2.392-1.322-3.706-.37l-.11.083-.018-.132-.001-.005C15.509 3.257 14.136 2.5 12.883 2.5S10.256 3.257 10 4.859l-.018.137-.11-.084c-1.314-.951-2.82-.515-3.706.37-.886.886-1.324 2.394-.37 3.706q.04.057.083.111-.068.008-.134.018h-.003c-1.602.256-2.36 1.63-2.36 2.883s.758 2.628 2.36 2.883"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.884 7.682a4.318 4.318 0 1 1 0 8.636 4.319 4.319 0 1 1 0-8.636"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlowerBulk;
