import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchFontBold = ({
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
      d="M18.033 16.818a2.17 2.17 0 0 1-2.17-2.167 2.17 2.17 0 0 1 4.337 0 2.17 2.17 0 0 1-2.167 2.167m4.644 1.092-.944-.94a4.35 4.35 0 0 0 .668-2.319 4.373 4.373 0 0 0-4.368-4.367c-2.41 0-4.37 1.96-4.37 4.367a4.373 4.373 0 0 0 4.37 4.367c.76 0 1.476-.195 2.1-.538l.99.987c.215.215.496.321.777.321s.564-.106.78-.323a1.1 1.1 0 0 0-.003-1.555"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.265 17.973h-2.103V6.028h4.895v1.396a1.099 1.099 0 1 0 2.2 0V4.928c0-.608-.492-1.1-1.1-1.1H2.1a1.1 1.1 0 0 0-1.1 1.1v2.496a1.1 1.1 0 1 0 2.2 0V6.028h4.762v11.945H5.994a1.1 1.1 0 1 0 0 2.2h6.271a1.1 1.1 0 1 0 0-2.2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchFontBold;
