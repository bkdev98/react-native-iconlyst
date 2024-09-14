import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTickSquareBulkcurved = ({
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
      d="M12.25 2.785c-7.198 0-9.75 2.552-9.75 9.75s2.552 9.75 9.75 9.75S22 19.733 22 12.535s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m11.591 15.438 4.75-4.747a.75.75 0 1 0-1.06-1.06l-4.22 4.216-1.84-1.843a.75.75 0 1 0-1.061 1.061l2.37 2.373a.75.75 0 0 0 1.061 0"
    />
  </Svg>
);
export default IconlystTickSquareBulkcurved;
