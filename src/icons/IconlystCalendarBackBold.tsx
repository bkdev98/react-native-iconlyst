import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarBackBold = ({
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
      d="M15.664 11.295h-7.37a.749.749 0 1 1 0-1.5h7.37a.749.749 0 1 1 0 1.5m-.4 5.65h-4.93l.68.63a.755.755 0 0 1-.52 1.3c-.18 0-.36-.07-.51-.2l-2.06-1.93a.76.76 0 0 1-.24-.55c0-.21.09-.4.24-.55l2.06-1.92a.755.755 0 0 1 1.03 1.1l-.67.62h4.92c.42 0 .75.34.75.75 0 .42-.33.75-.75.75m4.19-11.62c-.73-.72-1.76-1.13-2.99-1.24v-.96c0-.42-.33-.75-.75-.75-.41 0-.75.33-.75.75v3.55c-.06.02-.13.04-.2.04-.41 0-.75-.34-.75-.75v-1.72a.2.2 0 0 0-.2-.2h-4.62v-.92a.749.749 0 1 0-1.5 0v3.55c-.06.02-.13.04-.2.04-.41 0-.75-.34-.75-.75V4.501a.193.193 0 0 0-.247-.189c-1.909.573-3.013 2.12-3.013 4.413v8.14c0 2.98 1.79 4.76 4.79 4.76h7.61c3 0 4.8-1.75 4.8-4.69v-8.21c0-1.41-.43-2.59-1.23-3.4"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarBackBold;
