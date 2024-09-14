import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTurnRightCircleOutline = ({
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
      d="M12 20.25a8.25 8.25 0 1 1 0-16.5 8.25 8.25 0 0 1 0 16.5M2.25 12c0 5.384 4.365 9.75 9.75 9.75s9.75-4.366 9.75-9.75S17.385 2.25 12 2.25 2.25 6.616 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.516 10.845a4.09 4.09 0 0 0 4.089 4.089h4.131a.75.75 0 0 0 0-1.5h-4.131a2.59 2.59 0 1 1 0-5.18h1.587a.75.75 0 0 0 0-1.5h-1.587a4.09 4.09 0 0 0-4.09 4.09"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.897 17.023a.75.75 0 0 0 1.061 0l2.308-2.308a.75.75 0 0 0 0-1.06l-2.308-2.31a.75.75 0 0 0-1.06 1.061l1.777 1.778-1.778 1.778a.75.75 0 0 0 0 1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTurnRightCircleOutline;
