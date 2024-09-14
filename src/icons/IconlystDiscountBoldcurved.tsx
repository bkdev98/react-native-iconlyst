import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountBoldcurved = ({
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
      d="m15.351 10.495-5.141 5.14a.747.747 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l5.14-5.141a.75.75 0 1 1 1.061 1.06m-.597 5.29a.755.755 0 0 1-.755-.75c0-.414.332-.75.747-.75h.008a.75.75 0 0 1 0 1.5m-5.008-6.5h.008a.75.75 0 0 1 0 1.5.755.755 0 0 1-.755-.75c0-.414.332-.75.747-.75m2.504-6.5c-7.198 0-9.75 2.552-9.75 9.75s2.552 9.75 9.75 9.75S22 19.733 22 12.535s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountBoldcurved;
