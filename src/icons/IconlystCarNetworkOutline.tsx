import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCarNetworkOutline = ({
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
      d="M9.586 6.463c.539-.825 1.569-1.308 2.664-1.308 1.094 0 2.127.482 2.661 1.312a.75.75 0 1 1-1.261.812c-.204-.317-.707-.624-1.4-.624-.692 0-1.198.307-1.407.628a.75.75 0 1 1-1.257-.82"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.174 4.424c1.149-1.338 3.011-2.174 5.075-2.174 2.061 0 3.923.834 5.072 2.17a.75.75 0 0 1-1.137.978c-.834-.97-2.263-1.648-3.935-1.648-1.674 0-3.103.68-3.937 1.651a.75.75 0 1 1-1.138-.977M14.119 16.59a.75.75 0 0 1 .75-.75h1.33a.75.75 0 0 1 0 1.5h-1.33a.75.75 0 0 1-.75-.75M7.543 16.59a.75.75 0 0 1 .75-.75h1.33a.75.75 0 0 1 0 1.5h-1.33a.75.75 0 0 1-.75-.75M4.845 13.383a.75.75 0 0 1 .848-.638 46.7 46.7 0 0 0 13.099 0 .75.75 0 1 1 .21 1.486 48.2 48.2 0 0 1-13.52 0 .75.75 0 0 1-.637-.848"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.112 9.274a20.2 20.2 0 0 1 6.283 0h.003a2.41 2.41 0 0 1 1.868 1.561l.775 2.154q.025.07.069.132l.86 1.155c.449.613.691 1.353.692 2.112v3.871a1.49 1.49 0 0 1-1.49 1.491h-1.478a1.49 1.49 0 0 1-1.49-1.49v-.295H9.288v.294a1.49 1.49 0 0 1-1.49 1.491H6.33a1.49 1.49 0 0 1-1.49-1.495l.012-3.851v-.002c-.001-.75.235-1.48.675-2.087l.883-1.217a.5.5 0 0 0 .064-.114l.773-2.149a2.41 2.41 0 0 1 1.857-1.56zm.237 1.48a.91.91 0 0 0-.686.58l-.002.007-.781 2.169a2 2 0 0 1-.263.48l-.875 1.205a2.05 2.05 0 0 0-.39 1.206v.004l-.011 3.845h1.448v-.294c0-.823.667-1.49 1.49-1.49h5.934c.823 0 1.49.667 1.49 1.49v.294h1.459v-3.86c0-.441-.14-.87-.4-1.225l-.862-1.156-.01-.015a2 2 0 0 1-.26-.494l-.779-2.165a.91.91 0 0 0-.69-.58 18.7 18.7 0 0 0-5.812 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCarNetworkOutline;
