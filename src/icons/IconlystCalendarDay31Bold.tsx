import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDay31Bold = ({
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
      d="M16.273 16.739a.75.75 0 0 1-1.5 0v-4.35l-.02.014a.75.75 0 0 1-.9-1.199l1.22-.915a.75.75 0 0 1 .784-.071.75.75 0 0 1 .416.67zm-6.363.752a2.55 2.55 0 0 1-1.809-.748.75.75 0 1 1 1.06-1.063 1.055 1.055 0 1 0 .749-1.798.75.75 0 0 1-.585-1.221l.825-1.023H8.57a.75.75 0 0 1 0-1.5h3.147a.75.75 0 0 1 .585 1.221l-1.105 1.371a2.556 2.556 0 0 1-1.287 4.761m9.543-12.164c-.723-.725-1.755-1.134-2.982-1.236v-.966a.75.75 0 0 0-1.5 0v3.549c-.066.018-.13.04-.201.04a.75.75 0 0 1-.75-.75V4.246a.2.2 0 0 0-.2-.2H9.197v-.921a.75.75 0 0 0-1.5 0v3.549c-.064.018-.128.04-.2.04a.75.75 0 0 1-.75-.75V4.5a.193.193 0 0 0-.248-.188c-1.908.575-3.014 2.126-3.014 4.413v8.145c0 2.978 1.792 4.755 4.792 4.755h7.614c3 0 4.792-1.752 4.792-4.687V8.726c.005-1.412-.42-2.587-1.23-3.399"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarDay31Bold;
