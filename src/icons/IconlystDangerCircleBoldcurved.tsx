import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerCircleBoldcurved = ({
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
      d="M12.254 16.785a.755.755 0 0 1-.755-.75c0-.414.332-.75.746-.75h.009a.75.75 0 0 1 0 1.5M11.5 8.64a.75.75 0 0 1 1.5 0v3.895a.75.75 0 0 1-1.5 0zm.75-5.855c-7.198 0-9.75 2.552-9.75 9.75s2.552 9.75 9.75 9.75S22 19.733 22 12.535s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDangerCircleBoldcurved;
