import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsVerticalMinimizeCircleOutline = ({
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
      d="M12 5.75a.75.75 0 0 1 .75.75v2.467l1.164-1.164a.75.75 0 0 1 1.06 1.06l-2.444 2.445a.75.75 0 0 1-1.06 0L9.025 8.864a.75.75 0 0 1 1.061-1.061l1.164 1.164V6.5a.75.75 0 0 1 .75-.75m-.75 9.283-1.164 1.164a.75.75 0 0 1-1.06-1.06l2.444-2.445a.75.75 0 0 1 1.06 0l2.445 2.444a.75.75 0 1 1-1.06 1.061l-1.165-1.164V17.5a.75.75 0 1 1-1.5 0z"
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
export default IconlystArrowsVerticalMinimizeCircleOutline;
