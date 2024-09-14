import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtoneSquare2Bulk = ({
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
      d="M16.22 2.5H7.78C4.62 2.5 2.5 4.72 2.5 8.03v7.95c0 3.3 2.12 5.52 5.28 5.52h8.44c3.16 0 5.28-2.22 5.28-5.52V8.03c0-3.31-2.12-5.53-5.28-5.53"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.03 14.98c-.39.61-1.05.98-1.78.98h-.7A2.59 2.59 0 0 1 12 18.1c-1.27 0-2.33-.93-2.55-2.14h-.7c-.72 0-1.39-.37-1.78-.98s-.43-1.37-.13-2.03l.28-.59c.15-.32.23-.66.23-1.02v-.78c0-2.57 2.09-4.65 4.65-4.65 2.57 0 4.65 2.08 4.65 4.65l.01.78c0 .36.07.7.22 1.02l.28.59c.31.66.26 1.41-.13 2.03m-1.26-.81c-.06.09-.21.29-.52.29h-6.5c-.3 0-.46-.2-.51-.29a.57.57 0 0 1-.04-.58l.28-.59c.24-.52.37-1.08.37-1.66v-.78a3.15 3.15 0 1 1 6.3 0l.01.78c0 .58.12 1.14.37 1.66l.27.59a.6.6 0 0 1-.03.58M12 16.6c.44 0 .82-.27.99-.64h-1.98c.17.37.55.64.99.64"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtoneSquare2Bulk;
