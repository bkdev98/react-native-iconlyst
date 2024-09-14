import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarBold = ({
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
      d="M8 17.037a.776.776 0 1 1-.001 1.552.776.776 0 0 1 0-1.552m4.037 0a.776.776 0 1 1 0 1.552.776.776 0 0 1 0-1.552m0-3.495a.776.776 0 1 1 0 1.552.776.776 0 0 1 0-1.552m3.235.767a.75.75 0 0 1 .75-.75.754.754 0 0 1 .75.827v3.42a.75.75 0 0 1-1.5 0zM3.4 16.865c0 2.98 1.79 4.76 4.79 4.76h7.62c3 0 4.79-1.75 4.79-4.69v-5.71a.2.2 0 0 0-.2-.2H3.6a.2.2 0 0 0-.2.2zM19.37 5.325c-.73-.72-1.76-1.13-2.98-1.24v-.96a.749.749 0 1 0-1.5 0v3.55c-.07.02-.13.04-.2.04-.42 0-.75-.34-.75-.75v-1.72a.2.2 0 0 0-.2-.2H9.11v-.92a.749.749 0 1 0-1.5 0v3.55c-.06.02-.13.04-.2.04-.41 0-.75-.34-.75-.75V4.501a.193.193 0 0 0-.247-.189C4.504 4.885 3.4 6.432 3.4 8.725v.6c0 .11.09.2.2.2h16.8a.2.2 0 0 0 .2-.2v-.6c0-1.41-.42-2.59-1.23-3.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarBold;
