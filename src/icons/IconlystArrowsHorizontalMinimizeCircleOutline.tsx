import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsHorizontalMinimizeCircleOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.651 12.01a.75.75 0 0 1-.75.75h-5.698l1.485 1.485a.75.75 0 0 1-1.06 1.06l-2.766-2.765a.75.75 0 0 1 0-1.06l2.765-2.766a.75.75 0 1 1 1.061 1.06l-1.485 1.486h5.698a.75.75 0 0 1 .75.75m-10.493-.53a.75.75 0 0 1 0 1.06l-2.766 2.766a.75.75 0 1 1-1.06-1.06l1.485-1.486H3.09a.75.75 0 0 1 0-1.5h5.726L7.33 9.775a.75.75 0 0 1 1.061-1.06z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsHorizontalMinimizeCircleOutline;
