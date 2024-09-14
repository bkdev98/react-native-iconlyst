import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTickSquareBoldcurved = ({
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
      d="m16.341 10.692-4.75 4.746a.75.75 0 0 1-1.061 0l-2.371-2.373a.75.75 0 1 1 1.061-1.061l1.841 1.843L15.28 9.63a.751.751 0 0 1 1.061 1.06M12.25 2.785c-7.198 0-9.75 2.552-9.75 9.75s2.552 9.75 9.75 9.75S22 19.733 22 12.535s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTickSquareBoldcurved;
