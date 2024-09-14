import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHelmetBold = ({
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
      d="M17.588 17.124c-.48.72-1.09 1.136-1.868 1.267-1.6.27-3.481-.705-4.474-1.321.059-.03.118-.08.178-.13a8.06 8.06 0 0 0 2.28-4.31c.06-.38.25-.72.48-.92.24-.14.49-.23.78-.27.986-.178 1.972-.367 2.958-.546a5.84 5.84 0 0 1-.334 6.23M8.364 14.7c-1.18 0-2.14-.96-2.14-2.14s.96-2.14 2.14-2.14 2.14.96 2.14 2.14-.96 2.14-2.14 2.14m12.21-6.98c-.61-1.9-2.92-3.99-5.38-4.86a8.86 8.86 0 0 0-6.11.12 9.18 9.18 0 0 0-4.13 3.23 9.27 9.27 0 0 0-1.72 4.96c-.1 3.037 1.357 6.232 4.33 6.778a4.47 4.47 0 0 1-1.215 2.399.75.75 0 0 0 1.066 1.055 5.98 5.98 0 0 0 1.664-3.411l.005-.001c.218-.02.436-.07.645-.13a12.8 12.8 0 0 0 2.949 1.583v1.43a.75.75 0 0 0 1.5 0V19.85q.49.083.986.085.402.001.8-.064c1.195-.2 2.162-.845 2.863-1.901a7.37 7.37 0 0 0 1.335-3.998 7.34 7.34 0 0 0-.708-3.37l.01-.001c.6-.13.91-.46 1.06-.72.31-.51.33-1.23.05-2.16"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHelmetBold;
