import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookBold = ({
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
      d="m17.154 2.5-8.504.001a4.22 4.22 0 0 0-4.138 4.05H3.439a.75.75 0 0 0 0 1.5h3.325c.288 0 .53-.168.656-.406a.73.73 0 0 1 .094.344.75.75 0 0 1-.75.75H4.691a.2.2 0 0 0-.2.2v2.309H3.439a.75.75 0 0 0 0 1.5h3.325c.288 0 .53-.168.656-.406a.74.74 0 0 1 .094.345.75.75 0 0 1-.75.75H4.691a.2.2 0 0 0-.2.2v2.31H3.439a.75.75 0 0 0 0 1.5h3.325c.288 0 .53-.167.656-.405a.73.73 0 0 1 .094.344.75.75 0 0 1-.75.75H4.837a.19.19 0 0 0-.189.24c.499 1.795 2.153 3.124 4.087 3.124l8.416-.001c2.345-.052 4.21-2.002 4.159-4.335V6.836A4.297 4.297 0 0 0 17.154 2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotebookBold;
