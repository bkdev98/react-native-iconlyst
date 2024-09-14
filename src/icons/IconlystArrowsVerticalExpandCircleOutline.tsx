import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsVerticalExpandCircleOutline = ({
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
      d="M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12c0 5.384-4.365 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.47 6.52a.75.75 0 0 1 1.06 0l2.285 2.284a.75.75 0 0 1-1.06 1.061L12.75 8.861v6.278l1.005-1.004a.75.75 0 1 1 1.06 1.06l-2.284 2.285a.75.75 0 0 1-1.061 0l-2.285-2.284a.75.75 0 1 1 1.061-1.061l1.004 1.004V8.861l-1.004 1.004a.75.75 0 0 1-1.06-1.06z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsVerticalExpandCircleOutline;
