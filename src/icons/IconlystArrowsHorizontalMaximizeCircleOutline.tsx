import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsHorizontalMaximizeCircleOutline = ({
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
      d="M9.753 9.247a.75.75 0 0 1 0 1.061l-.942.942h2.078a.75.75 0 0 1 0 1.5H8.81l.942.942a.75.75 0 0 1-1.061 1.06L6.47 12.53a.75.75 0 0 1 0-1.06l2.222-2.223a.75.75 0 0 1 1.06 0m4.494 0a.75.75 0 0 1 1.061 0l2.222 2.223a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.06-1.061l.941-.942h-2.078a.75.75 0 0 1 0-1.5h2.078l-.942-.942a.75.75 0 0 1 0-1.06"
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
export default IconlystArrowsHorizontalMaximizeCircleOutline;
