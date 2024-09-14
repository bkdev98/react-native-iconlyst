import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookDocumentBold = ({
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
      d="M16.515 12.749h-6.239a.75.75 0 0 1 0-1.5h6.24a.75.75 0 0 1 0 1.5m0 3.801h-6.239a.75.75 0 0 1 0-1.5h6.24a.75.75 0 0 1 0 1.5m-6.239-9.101h3.01a.75.75 0 0 1 0 1.5h-3.01a.75.75 0 0 1 0-1.5M17.153 2.5l-8.504.001a4.22 4.22 0 0 0-2.979 1.31 4.2 4.2 0 0 0-1.089 2.136h-1.14a.75.75 0 0 0 0 1.5h3.324a.74.74 0 0 0 .646-.391c.06.108.104.226.104.359a.75.75 0 0 1-.75.75H4.69a.2.2 0 0 0-.2.2v2.279H3.44a.75.75 0 0 0 0 1.5h3.325a.74.74 0 0 0 .646-.391c.06.108.104.227.104.359a.75.75 0 0 1-.75.75H4.69a.2.2 0 0 0-.2.2v2.281H3.44a.75.75 0 0 0 0 1.5h3.325a.74.74 0 0 0 .646-.391.74.74 0 0 1 .104.36.75.75 0 0 1-.75.75H4.732a.192.192 0 0 0-.194.214C4.8 19.865 6.592 21.5 8.734 21.5l8.417-.001a4.26 4.26 0 0 0 4.158-4.34V6.839A4.297 4.297 0 0 0 17.153 2.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotebookDocumentBold;
