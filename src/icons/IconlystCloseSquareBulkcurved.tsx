import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSquareBulkcurved = ({
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
      d="M14.65 15.678a.75.75 0 0 0 .53-1.281l-1.874-1.873 1.863-1.864a.749.749 0 1 0-1.06-1.06l-1.864 1.864-1.866-1.866a.75.75 0 1 0-1.06 1.06l1.866 1.866-1.866 1.868a.749.749 0 1 0 1.06 1.06l1.867-1.867 1.873 1.873a.75.75 0 0 0 .531.22"
    />
  </Svg>
);
export default IconlystCloseSquareBulkcurved;
