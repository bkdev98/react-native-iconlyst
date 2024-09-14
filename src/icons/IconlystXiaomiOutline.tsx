import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystXiaomiOutline = ({
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
      d="M2.25 3A.75.75 0 0 1 3 2.25h18a.75.75 0 0 1 .75.75v18a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v16.5h16.5V3.75z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.092 9.227a.75.75 0 0 1 .75-.75h3.697a2.604 2.604 0 0 1 2.599 2.598v3.698a.75.75 0 1 1-1.5 0v-3.698c0-.602-.496-1.098-1.099-1.098H8.592v4.796a.75.75 0 0 1-1.5 0zM16.16 8.477a.75.75 0 0 1 .75.75v5.546a.75.75 0 0 1-1.5 0V9.227a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.613 11.25a.75.75 0 0 1 .75.75v2.773a.75.75 0 0 1-1.5 0V12a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystXiaomiOutline;
