import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortDownBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M7.25 19.04a1 1 0 0 1-.737-.322l-3.024-3.043a1 1 0 0 1 1.418-1.41l1.341 1.35V10.44a1 1 0 1 1 2 0v5.176l1.342-1.35a1 1 0 1 1 1.418 1.41l-3.049 3.07a1 1 0 0 1-.71.295M20 6.96H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2m-.001 5.69h-6.456a1 1 0 1 1 0-2h6.456a1 1 0 1 1 0 2m0 5.87h-6.456a1 1 0 1 1 0-2h6.456a1 1 0 1 1 0 2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSortDownBold;
