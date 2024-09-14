import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBarChartOutline = ({
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
      d="M4.5 3.37a.75.75 0 0 1 .75.75v14c0 .69.56 1.25 1.25 1.25h14a.75.75 0 0 1 0 1.5h-14a2.75 2.75 0 0 1-2.75-2.75v-14a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.5 6.37c.966 0 1.75.783 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-12a.75.75 0 1 1 0-1.5h12a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25h-12a.75.75 0 0 1 0-1.5zM11.416 12.87c.966 0 1.75.783 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75H4.5a.75.75 0 1 1 0-1.5h6.916a.25.25 0 0 0 .25-.25v-1a.25.25 0 0 0-.25-.25H4.5a.75.75 0 1 1 0-1.5z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBarChartOutline;
