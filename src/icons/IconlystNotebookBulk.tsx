import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNotebookBulk = ({
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
      d="m8.65 2.501 8.504-.001a4.297 4.297 0 0 1 4.156 4.336v10.328c.051 2.333-1.814 4.283-4.159 4.335l-8.416.001c-1.936 0-3.592-1.332-4.088-3.13a.192.192 0 0 1 .183-.24l1.935-.048a.75.75 0 0 0 0-1.5H4.71a.2.2 0 0 1-.2-.191l-.02-.444v-2.364c0-.11.09-.2.2-.2h2.074a.75.75 0 0 0 0-1.5H4.69a.2.2 0 0 1-.2-.2V8.886c0-.11.09-.2.2-.2h2.074a.75.75 0 1 0 0-1.5H4.708a.2.2 0 0 1-.2-.202l.004-.433a4.22 4.22 0 0 1 4.139-4.05"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M2.564 7.3a.75.75 0 0 1 .75-.75H6.64a.75.75 0 0 1 0 1.5H3.314a.75.75 0 0 1-.75-.75m0 4.698a.75.75 0 0 1 .75-.75H6.64a.75.75 0 0 1 0 1.5H3.314a.75.75 0 0 1-.75-.75m0 4.699a.75.75 0 0 1 .75-.75H6.64a.75.75 0 0 1 0 1.5H3.314a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNotebookBulk;
