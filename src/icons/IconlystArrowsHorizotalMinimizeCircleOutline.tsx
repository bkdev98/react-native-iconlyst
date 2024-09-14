import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsHorizotalMinimizeCircleOutline = ({
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
      d="M15.864 9.248a.75.75 0 0 1 0 1.06l-.942.942H17a.75.75 0 1 1 0 1.5h-2.078l.942.942a.75.75 0 1 1-1.06 1.06L12.58 12.53a.75.75 0 0 1 0-1.06l2.222-2.222a.75.75 0 0 1 1.06 0M8.136 9.248a.75.75 0 0 1 1.061 0l2.222 2.222a.75.75 0 0 1 0 1.06l-2.222 2.223a.75.75 0 0 1-1.06-1.061l.941-.942H7a.75.75 0 0 1 0-1.5h2.078l-.942-.942a.75.75 0 0 1 0-1.06"
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
export default IconlystArrowsHorizotalMinimizeCircleOutline;
