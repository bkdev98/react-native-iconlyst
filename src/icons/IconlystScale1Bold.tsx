import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystScale1Bold = ({
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
      d="M11.25 9.61a.75.75 0 0 1 1.5 0v1.17a.1.1 0 0 0 .1.1h2.784c.188 0 .33-.171.279-.352A4.07 4.07 0 0 0 12 7.565a4.07 4.07 0 0 0-3.912 2.963c-.05.18.091.351.28.351h2.781a.1.1 0 0 0 .1-.1z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 6.065a5.57 5.57 0 0 1 5.564 5.565.75.75 0 0 1-.75.75H7.188a.75.75 0 0 1-.75-.75A5.57 5.57 0 0 1 12 6.065m-8.618 9.822a.3.3 0 0 0 .298.265h16.623a.3.3 0 0 0 .298-.265c.122-1.112.6-5.459.854-7.793.183-1.56-.19-2.913-1.077-3.91-.953-1.073-2.442-1.663-4.192-1.663H7.815c-1.751 0-3.24.59-4.193 1.663-.888.997-1.26 2.35-1.077 3.905zM4.052 17.652a.292.292 0 0 0-.285.367c.608 2.215 1.868 3.46 4.895 3.46h6.676c3.21 0 4.367-1.489 4.894-3.462a.29.29 0 0 0-.286-.365z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystScale1Bold;
