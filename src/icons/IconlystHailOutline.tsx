import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHailOutline = ({
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
      d="M10.196 20.751h-.12l-1.98-.32a.74.74 0 0 1-.58-.47l-.71-1.87a.76.76 0 0 1 .12-.74l1.27-1.55c.17-.21.44-.31.7-.27l1.97.32c.26.04.49.22.58.47l.71 1.87c.09.25.05.53-.12.74l-1.27 1.55a.74.74 0 0 1-.58.28zm-1.43-1.74 1.12.18.72-.88-.4-1.06-1.12-.18-.72.88zM5.066 13.4c-.22 0-.43-.1-.58-.27l-1.28-1.54a.77.77 0 0 1-.13-.74l.69-1.88c.09-.25.31-.43.58-.48l1.97-.34c.27-.04.53.05.71.26l1.28 1.54c.17.21.22.49.13.74l-.69 1.88c-.09.25-.31.43-.58.48l-1.97.34s-.08.01-.13.01m-.43-2.44.73.87 1.12-.19.39-1.07-.73-.87-1.12.19zM17.826 17.96h-.11l-1.98-.28a.76.76 0 0 1-.59-.46l-.75-1.85c-.1-.25-.06-.53.1-.74l1.23-1.58c.16-.21.43-.32.69-.28l1.98.27c.27.04.49.21.59.46l.75 1.86c.1.25.06.53-.1.74l-1.23 1.58c-.14.18-.36.29-.59.29zm-1.45-1.71 1.12.16.7-.9-.43-1.06-1.12-.15-.7.9zM11.156 14.751c-.1 0-.21-.02-.31-.07-.38-.17-.55-.61-.38-.99l2.89-6.46c.17-.38.61-.55.99-.38s.55.61.38.99l-2.89 6.46a.74.74 0 0 1-.68.44zM17.776 11.971c-.06 0-.13 0-.2-.03a.76.76 0 0 1-.53-.92c.92-3.39 4.12-4.02 4.25-4.05.4-.08.8.19.87.6.08.41-.19.8-.6.87-.09.02-2.41.5-3.08 2.97-.09.33-.39.55-.72.55zM8.986 9.04c-.21 0-.41-.08-.56-.25a.747.747 0 0 1 .06-1.06c.07-.07 1.79-1.68 1.08-4.13a.75.75 0 1 1 1.44-.42c.99 3.37-1.41 5.58-1.51 5.67-.14.13-.32.19-.5.19z"
    />
    <Path
      fill={props.color}
      d="M21.446 21.361H4.036c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h17.41c.41 0 .75.34.75.75s-.34.75-.75.75"
    />
  </Svg>
);
export default IconlystHailOutline;
