import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInvisionCircleOutline = ({
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
      d="M16.215 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.78V8.03c0-3.46 2.22-5.78 5.53-5.78h8.43c3.31 0 5.53 2.32 5.53 5.78v7.94c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.94c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.03c0-2.6-1.58-4.28-4.03-4.28z"
    />
    <Path
      fill={props.color}
      d="M15.715 16.819h-.17c-.61-.07-1.11-.46-1.34-1.06-.21-.79 0-1.46.16-2.05.08-.28.16-.54.18-.77.04-.39-.04-.73-.21-.93-.07-.08-.2-.2-.34-.2h-1.16l-.97 3.9c-.16.64-.73 1.08-1.38 1.08h-1.22c-.64 0-1.21-.27-1.59-.75-.45-.57-.61-1.41-.42-2.19l.5-2.04h-.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h1.12a.753.753 0 0 1 .73.93l-.73 2.97c-.08.33-.02.7.14.9.1.12.22.18.41.18h1.22l.92-3.91c.17-.63.73-1.07 1.38-1.07h1.22c.54 0 1.07.25 1.46.71.45.51.66 1.25.58 2.08-.04.37-.14.7-.24 1.03-.13.45-.25.87-.18 1.18 0 0 .05.02.06.02.23-.35.73-.45 1.08-.23.35.23.49.68.26 1.03-.28.43-.79.7-1.32.7zM9.315 8.92a.87.87 0 1 1 .002-1.742.87.87 0 0 1-.002 1.742"
    />
  </Svg>
);
export default IconlystInvisionCircleOutline;
