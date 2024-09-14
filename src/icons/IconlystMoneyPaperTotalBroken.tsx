import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoneyPaperTotalBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 20.897h5.81c1.967 0 3.19-1.387 3.19-3.35V11.99c0-1.964-1.223-3.351-3.188-3.351H6.188C4.228 8.639 3 10.026 3 11.989v5.557c0 1.964 1.223 3.351 3.188 3.351H8.68M5.955 17.654h1.403M18.044 11.88H16.64"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 12.48a2.288 2.288 0 1 0 2.287 2.288M6.754 5.893h10.493M8.691 3.23h6.618"
    />
  </Svg>
);
export default IconlystMoneyPaperTotalBroken;
