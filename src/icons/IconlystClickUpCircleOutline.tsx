import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClickUpCircleOutline = ({
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
      d="M12 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.508 7.216a.75.75 0 0 1 .985 0l3.165 2.755a.75.75 0 0 1-.985 1.132L12 8.776l-2.673 2.327a.75.75 0 1 1-.985-1.132zM8.236 13.77a.75.75 0 0 1 1.05.153c.796 1.07 1.787 1.543 2.714 1.543s1.918-.472 2.715-1.543a.75.75 0 1 1 1.203.896c-1.034 1.39-2.445 2.147-3.918 2.147s-2.884-.758-3.918-2.147a.75.75 0 0 1 .154-1.05"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClickUpCircleOutline;
