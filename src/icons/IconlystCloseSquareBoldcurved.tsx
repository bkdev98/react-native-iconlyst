import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSquareBoldcurved = ({
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
      d="M15.181 15.458a.75.75 0 0 1-1.061 0l-1.873-1.873-1.867 1.867a.746.746 0 0 1-1.06 0 .75.75 0 0 1 0-1.06l1.866-1.868-1.866-1.866a.749.749 0 1 1 1.06-1.06l1.866 1.866L14.11 9.6a.749.749 0 1 1 1.06 1.06l-1.863 1.864 1.874 1.873a.75.75 0 0 1 0 1.06M12.25 2.785c-7.198 0-9.75 2.552-9.75 9.75s2.552 9.75 9.75 9.75S22 19.733 22 12.535s-2.551-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseSquareBoldcurved;
