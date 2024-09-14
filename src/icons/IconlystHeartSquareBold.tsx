import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeartSquareBold = ({
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
      d="M10.352 9.028a2 2 0 0 1 .89-.058c.247.042.582.29.807.457l.007.005a.75.75 0 0 0 .897 0l.003-.004c.257-.191.574-.428.81-.468.293-.05.595-.028.874.063 1.175.382 1.462 1.678 1.134 2.706-.528 1.615-2.495 2.818-3.27 3.24-.784-.427-2.777-1.643-3.274-3.238-.33-1.026-.043-2.324 1.121-2.703"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.282 2.5h8.435C19.877 2.5 22 4.722 22 8.029v7.942c0 3.307-2.123 5.529-5.284 5.529H8.282C5.123 21.5 3 19.278 3 15.971V8.029C3 4.722 5.123 2.5 8.282 2.5m3.905 13.99a.74.74 0 0 0 .632.001c.143-.066 3.518-1.658 4.382-4.298v-.003c.636-1.987-.285-4.004-2.094-4.592a3.3 3.3 0 0 0-1.592-.117c-.38.064-.722.241-1.014.43-.287-.182-.63-.356-1.008-.42a3.4 3.4 0 0 0-1.59.107c-1.815.59-2.738 2.606-2.104 4.586.817 2.616 4.241 4.24 4.388 4.306"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHeartSquareBold;
