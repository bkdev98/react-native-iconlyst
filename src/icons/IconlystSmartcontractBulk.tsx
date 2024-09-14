import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSmartcontractBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M19.75 5v14c0 .46-.12.88-.34 1.25-.43.75-1.24 1.25-2.16 1.25h-9.5c-.92 0-1.73-.5-2.16-1.25-.22-.37-.34-.79-.34-1.25V5c0-.46.12-.88.34-1.25C6.02 3 6.83 2.5 7.75 2.5h9.5c.92 0 1.73.5 2.16 1.25.22.37.34.79.34 1.25"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.25 18.75H3.5a.749.749 0 1 0 0 1.5h2.09c-.22-.37-.34-.79-.34-1.25zM2.75 4.5c0 .42.34.75.75.75h1.75V5c0-.46.12-.88.34-1.25H3.5c-.41 0-.75.34-.75.75M5.25 12.75v-1.5H4.5a.749.749 0 1 0 0 1.5zM19.75 5.25h1.75a.749.749 0 1 0 0-1.5h-2.09c.22.37.34.79.34 1.25zM19.75 11.25v1.5h.75a.749.749 0 1 0 0-1.5zM21.5 18.75h-1.75V19c0 .46-.12.88-.34 1.25h2.09a.749.749 0 1 0 0-1.5M16.25 14.75h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5M16.25 11.25h-7.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5M8.75 9.25h4.5a.75.75 0 0 0 0-1.5h-4.5a.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSmartcontractBulk;
