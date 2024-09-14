import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiggOutline = ({
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
      d="M12.55 9.54a.25.25 0 0 0-.25.25v4.3c0 .137.112.25.25.25h1.85V9.79a.25.25 0 0 0-.25-.25zm1.85 6.3v.95a.25.25 0 0 1-.25.25h-2.6a.75.75 0 1 0 0 1.5h2.6a1.75 1.75 0 0 0 1.75-1.75v-7a1.75 1.75 0 0 0-1.75-1.75h-1.6a1.75 1.75 0 0 0-1.75 1.75v4.3c0 .966.783 1.75 1.75 1.75zM6.6 5.46a.75.75 0 0 1 .75.75v7.875a1.75 1.75 0 0 1-1.75 1.75H4a1.75 1.75 0 0 1-1.75-1.75v-4.3c0-.966.784-1.75 1.75-1.75h1.85V6.211a.75.75 0 0 1 .75-.75m-.75 4.075H4a.25.25 0 0 0-.25.25v4.3c0 .138.112.25.25.25h1.6a.25.25 0 0 0 .25-.25zM9.3 8.293a.75.75 0 0 1 .75.75v5.796a.75.75 0 0 1-1.5 0V9.043a.75.75 0 0 1 .75-.75M9.3 5.633a.75.75 0 0 1 .75.75v.097a.75.75 0 1 1-1.5 0v-.097a.75.75 0 0 1 .75-.75M18.4 9.54a.25.25 0 0 0-.25.25v4.3c0 .137.112.25.25.25h1.85V9.79a.25.25 0 0 0-.25-.25zm1.85 6.3v.95a.25.25 0 0 1-.25.25h-2.6a.75.75 0 1 0 0 1.5H20a1.75 1.75 0 0 0 1.75-1.75v-7A1.75 1.75 0 0 0 20 8.04h-1.6a1.75 1.75 0 0 0-1.75 1.75v4.3c0 .966.784 1.75 1.75 1.75z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiggOutline;
