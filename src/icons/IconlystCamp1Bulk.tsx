import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp1Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.75 20.489c0 .42-.34.75-.75.75H3a.749.749 0 1 1 0-1.5h.41l7.74-14.37-.81-1.5c-.2-.37-.06-.82.3-1.02.37-.19.82-.06 1.02.31l.34.63.34-.63c.19-.37.65-.5 1.01-.31.37.2.5.65.31 1.02l-.81 1.5 7.74 14.37H21c.41 0 .75.34.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.826 12.691h-1.652a.75.75 0 0 1 0-1.5h1.652a.75.75 0 0 1 0 1.5M15.08 16.149v5.09h-1.5v-5.09c0-.09-.06-.16-.12-.16h-2.92c-.06 0-.12.07-.12.16v5.09h-1.5v-5.09c0-.92.73-1.66 1.62-1.66h2.92c.89 0 1.62.74 1.62 1.66"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp1Bulk;
