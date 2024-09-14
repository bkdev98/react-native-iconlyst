import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMetaMessengerOutline = ({
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
      d="M12.014 21.751c-1.51 0-3.02-.36-4.39-1.05-.07-.03-.13-.05-.18-.03-.82.19-2.12.52-3.07.76-.52.13-1.05-.02-1.42-.39a1.47 1.47 0 0 1-.4-1.39l.11-.49c.22-.95.47-2.06.6-2.67.01-.06 0-.11-.02-.17-.66-1.41-.99-2.86-.99-4.32 0-2.9 1.29-5.64 3.54-7.51 2.24-1.86 5.18-2.61 8.06-2.07 3.89.73 6.99 3.83 7.72 7.72a9.76 9.76 0 0 1-2.08 8.07c-1.87 2.25-4.6 3.54-7.5 3.54zm-3.71-2.39c1.16.58 2.44.89 3.71.89 2.45 0 4.77-1.09 6.35-3a8.32 8.32 0 0 0 1.76-6.83c-.62-3.29-3.24-5.91-6.52-6.52-2.44-.46-4.93.18-6.83 1.75-1.91 1.58-3 3.9-3 6.35 0 1.24.28 2.47.85 3.67.17.35.21.75.13 1.13-.13.61-.39 1.73-.61 2.69l-.11.49c.95-.25 2.26-.58 3.08-.77.39-.1.81-.05 1.21.15z"
    />
    <Path
      fill={props.color}
      d="M7.795 14.28c-.18 0-.36-.06-.51-.2a.746.746 0 0 1-.05-1.06l2.82-3.07c.28-.31.82-.31 1.11 0l2.26 2.47 2.26-2.47c.28-.31.75-.33 1.06-.05s.33.75.05 1.06l-2.81 3.07c-.28.31-.82.31-1.11 0l-2.26-2.47-2.26 2.47c-.15.16-.35.24-.55.24z"
    />
  </Svg>
);
export default IconlystMetaMessengerOutline;
