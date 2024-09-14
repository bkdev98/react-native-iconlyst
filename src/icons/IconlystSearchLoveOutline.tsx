import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchLoveOutline = ({
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
      d="M11.576 2.908a.75.75 0 0 1-.652.836 7.698 7.698 0 1 0 6.153 13.32 1 1 0 0 1 .088-.082 7.68 7.68 0 0 0 2.35-4.594.75.75 0 0 1 1.487.194 9.17 9.17 0 0 1-2.313 4.987l2.908 2.9a.75.75 0 1 1-1.06 1.062l-2.944-2.937a9.198 9.198 0 1 1-6.854-16.338.75.75 0 0 1 .837.652m6.048 1.133a1.1 1.1 0 0 0-.987-.166c-.572.185-.892.851-.65 1.608.196.61.752 1.215 1.358 1.708.27.22.53.4.728.528.201-.13.463-.313.736-.535.61-.497 1.164-1.102 1.351-1.697l.001-.003c.241-.755-.078-1.423-.65-1.608a1.1 1.1 0 0 0-.99.168.75.75 0 0 1-.897-.003m.45 4.556-.359.659-.001-.001-.003-.001-.007-.004-.024-.014-.084-.048a10.057 10.057 0 0 1-1.197-.833c-.662-.538-1.506-1.374-1.84-2.413v-.001c-.416-1.3.033-2.983 1.619-3.494a2.6 2.6 0 0 1 1.898.124 2.6 2.6 0 0 1 1.888-.125l.004.001c1.583.51 2.037 2.191 1.622 3.492-.325 1.033-1.173 1.87-1.834 2.408a10 10 0 0 1-1.285.888l-.025.013-.007.004-.002.002h-.001zm0 0 .362.657a.75.75 0 0 1-.72.002z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchLoveOutline;
