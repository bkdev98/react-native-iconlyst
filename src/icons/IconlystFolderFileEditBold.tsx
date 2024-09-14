import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileEditBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.774 10.914a.25.25 0 0 0-.17-.065.25.25 0 0 0-.185.08l-3.17 3.464a1 1 0 0 0-.246.55l-.079.75.077.075.728-.123c.223-.038.43-.151.58-.32l3.146-3.433a.25.25 0 0 0 .07-.184.24.24 0 0 0-.08-.172z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.559 12.908-3.138 3.425a2.5 2.5 0 0 1-1.443.792l-.73.12a1.556 1.556 0 0 1-1.335-.406 1.55 1.55 0 0 1-.48-1.306l.08-.75a2.5 2.5 0 0 1 .624-1.398l3.18-3.474a1.76 1.76 0 0 1 2.476-.098l.67.622a1.747 1.747 0 0 1 .095 2.473m1.06-7.544h-2.652a1.67 1.67 0 0 1-1.313-.655l-.856-1.141a2.65 2.65 0 0 0-2.11-1.055H7.813c-3.424 0-5.088 1.907-5.088 5.829v7.312c0 3.652 2.185 5.833 5.845 5.833h7.297c3.65 0 5.832-2.181 5.832-5.83l.026-4.66c0-3.843-1.622-5.633-5.105-5.633"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFolderFileEditBold;
