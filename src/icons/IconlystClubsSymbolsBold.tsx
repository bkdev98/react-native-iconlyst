import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystClubsSymbolsBold = ({
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
      d="M17.885 9.156a4.3 4.3 0 0 0-1.904-.335 4.4 4.4 0 0 0 .269-3.153c-.425-1.484-1.678-2.684-3.191-3.057a4.44 4.44 0 0 0-4.985 2.276c-.63 1.225-.63 2.687-.054 3.918a4.55 4.55 0 0 0-1.784.296 4.44 4.44 0 0 0-2.496 2.54 4.43 4.43 0 0 0 .14 3.546c.774 1.569 2.427 2.534 4.185 2.469a7 7 0 0 0 1.667-.235c-.412 1.766-1.842 3.226-1.858 3.242a.502.502 0 0 0 .355.853h7.54a.5.5 0 0 0 .353-.854c-.016-.016-1.455-1.473-1.854-3.256a6.9 6.9 0 0 0 1.914.23 4.43 4.43 0 0 0 4.104-2.862c.827-2.176-.25-4.696-2.401-5.618"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystClubsSymbolsBold;
