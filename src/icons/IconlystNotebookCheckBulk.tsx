import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookCheckBulk = ({
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
      d="m17.154 2.5-8.504.001a4.22 4.22 0 0 0-2.98 1.31 4.2 4.2 0 0 0-1.133 2.416H3.439a.75.75 0 0 0 0 1.5h3.325a.75.75 0 0 0 .669-.426.7.7 0 0 1 .081.325.75.75 0 0 1-.75.75H4.691a.2.2 0 0 0-.2.2v2.348H3.439a.75.75 0 0 0 0 1.5h3.325a.75.75 0 0 0 .669-.425.7.7 0 0 1 .081.324.75.75 0 0 1-.75.75H4.691a.2.2 0 0 0-.2.2v2.35H3.439a.75.75 0 0 0 0 1.5h3.325a.75.75 0 0 0 .669-.425.7.7 0 0 1 .081.324c0 .415-.335.75-.75.75H4.77a.192.192 0 0 0-.193.224C4.935 19.978 6.67 21.5 8.735 21.5l8.416-.001a4.26 4.26 0 0 0 4.159-4.34V6.838A4.297 4.297 0 0 0 17.154 2.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.137 12.98h-1.161a.75.75 0 0 1 0-1.5h1.161a.75.75 0 0 1 0 1.5m0 3.705h-6.858a.75.75 0 0 1 0-1.5h6.858a.75.75 0 0 1 0 1.5M9.496 9.806a.75.75 0 0 1 1.061 0l1.188 1.188 3.786-3.786a.749.749 0 1 1 1.06 1.06l-4.316 4.316a.74.74 0 0 1-.53.22.74.74 0 0 1-.53-.22l-1.719-1.717a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotebookCheckBulk;
