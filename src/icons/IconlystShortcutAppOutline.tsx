import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShortcutAppOutline = ({
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
      d="M10.77 4.144 4.035 8.946a.68.68 0 0 0 0 1.108l6.733 4.802a2.12 2.12 0 0 0 2.462 0l6.733-4.802a.68.68 0 0 0 0-1.108l-6.733-4.802a2.12 2.12 0 0 0-2.462 0m-.871-1.222a3.62 3.62 0 0 1 4.203 0l6.733 4.803a2.18 2.18 0 0 1 0 3.55l-6.733 4.803a3.62 3.62 0 0 1-4.203 0l-6.734-4.803a2.18 2.18 0 0 1 0-3.55z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m10.77 9.144-6.734 4.802a.68.68 0 0 0 0 1.108l6.733 4.802a2.12 2.12 0 0 0 2.462 0l6.733-4.802a.68.68 0 0 0 0-1.108l-6.733-4.802a2.12 2.12 0 0 0-2.462 0m-.871-1.222a3.62 3.62 0 0 1 4.203 0l6.733 4.803a2.18 2.18 0 0 1 0 3.55l-6.733 4.803a3.62 3.62 0 0 1-4.203 0l-6.734-4.803a2.18 2.18 0 0 1 0-3.55z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShortcutAppOutline;
