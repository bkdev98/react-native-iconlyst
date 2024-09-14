import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowDownCircleBoldcurved = ({
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
      d="M16.338 10.981c-.976 1.424-2.805 3.813-4.088 3.813s-3.112-2.389-4.088-3.813a.749.749 0 1 1 1.237-.848c1.088 1.587 2.435 3.065 2.881 3.162.387-.097 1.734-1.575 2.822-3.162a.75.75 0 0 1 1.236.848M12.25 2.25C5.052 2.25 2.5 4.801 2.5 12s2.552 9.75 9.75 9.75S22 19.198 22 12s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowDownCircleBoldcurved;
