import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystInvisionSquareOutline = ({
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
      d="M12 21.75c-5.38 0-9.75-4.37-9.75-9.75S6.62 2.25 12 2.25s9.75 4.37 9.75 9.75-4.37 9.75-9.75 9.75m0-18c-4.55 0-8.25 3.7-8.25 8.25s3.7 8.25 8.25 8.25 8.25-3.7 8.25-8.25-3.7-8.25-8.25-8.25"
    />
    <Path
      fill={props.color}
      d="M15.72 16.528h-.17c-.61-.07-1.12-.46-1.35-1.07-.21-.79 0-1.46.16-2.05.08-.28.16-.54.18-.77.04-.39-.04-.73-.21-.93-.07-.07-.19-.2-.34-.2h-1.16l-.97 3.9c-.16.64-.73 1.08-1.38 1.08H9.26c-.64 0-1.21-.27-1.59-.75-.45-.57-.61-1.41-.42-2.19l.5-2.04h-.17c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H8.7a.754.754 0 0 1 .73.93l-.73 2.97c-.08.33-.02.7.14.9.1.12.22.18.41.18h1.22l.92-3.91c.17-.63.73-1.07 1.38-1.07h1.22c.54 0 1.06.25 1.46.7.46.51.66 1.25.58 2.08-.04.37-.14.7-.24 1.03-.13.45-.25.87-.18 1.18 0 .01.05.02.07.02.23-.35.73-.45 1.08-.22s.48.69.26 1.03c-.28.43-.78.69-1.31.69zM9.31 8.63a.87.87 0 1 1 .002-1.74.87.87 0 0 1-.002 1.74"
    />
  </Svg>
);
export default IconlystInvisionSquareOutline;
