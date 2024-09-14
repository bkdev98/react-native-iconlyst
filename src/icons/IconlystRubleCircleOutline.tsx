import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRubleCircleOutline = ({
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
      d="M12.25 3.813A8.25 8.25 0 0 0 4 12.063a8.25 8.25 0 0 0 8.25 8.25 8.25 8.25 0 0 0 8.25-8.25 8.25 8.25 0 0 0-8.25-8.25m-9.75 8.25a9.75 9.75 0 0 1 9.75-9.75 9.75 9.75 0 0 1 9.75 9.75 9.75 9.75 0 0 1-9.75 9.75 9.75 9.75 0 0 1-9.75-9.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.305 8.559a.75.75 0 0 1 .75-.75h2.775a2.858 2.858 0 1 1 0 5.716h-2.025v2.79a.75.75 0 0 1-1.5 0v-2.79h-.155a.75.75 0 0 1 0-1.5h.155zm1.5 3.466h2.025a1.358 1.358 0 1 0 0-2.716h-2.025z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.4 14.664a.75.75 0 0 1 .75-.75h2.432a.75.75 0 1 1 0 1.5H10.15a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRubleCircleOutline;
