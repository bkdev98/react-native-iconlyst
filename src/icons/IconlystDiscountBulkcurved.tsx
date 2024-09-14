import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBulkcurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 2.785c-7.198 0-9.75 2.552-9.75 9.75s2.552 9.75 9.75 9.75S22 19.733 22 12.535s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m10.21 15.636 5.14-5.141a.75.75 0 1 0-1.06-1.061l-5.14 5.14a.75.75 0 0 0 1.06 1.062M13.998 15.035c0 .414.341.75.755.75a.75.75 0 0 0 0-1.5h-.008a.747.747 0 0 0-.747.75M9.753 9.285h-.008a.747.747 0 0 0-.747.75c0 .414.341.75.755.75a.75.75 0 0 0 0-1.5"
    />
  </Svg>
);
export default IconlystDiscountBulkcurved;
