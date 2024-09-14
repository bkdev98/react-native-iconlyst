import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowRightCircleBoldcurved = ({
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
      d="M11.235 16.089a.747.747 0 0 1-1.043-.193.75.75 0 0 1 .193-1.043c1.584-1.09 3.06-2.438 3.157-2.884-.097-.386-1.573-1.733-3.157-2.821a.75.75 0 0 1 .85-1.237c1.421.976 3.805 2.805 3.805 4.088s-2.384 3.113-3.805 4.09M12.25 2.25C5.051 2.25 2.5 4.802 2.5 12s2.551 9.75 9.75 9.75S22 19.198 22 12s-2.552-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowRightCircleBoldcurved;
