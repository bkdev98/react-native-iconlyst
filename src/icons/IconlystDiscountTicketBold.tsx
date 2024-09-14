import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiscountTicketBold = ({
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
      d="M14.144 15.072a.927.927 0 0 1 0-1.853c.511 0 .927.416.927.926a.93.93 0 0 1-.927.927m-4.298-.116a.75.75 0 0 1-.53-1.28l4.408-4.407a.749.749 0 1 1 1.06 1.06l-4.408 4.408a.75.75 0 0 1-.53.219m.009-6.026c.511 0 .927.416.927.926a.93.93 0 0 1-.927.927.93.93 0 0 1-.926-.927c0-.51.416-.926.926-.926m9.538-1.613c-.079 0-.143-.064-.143-.181a2.205 2.205 0 0 0-2.203-2.202H6.953c-1.215 0-2.203.988-2.203 2.24a.143.143 0 0 1-.143.143A2.11 2.11 0 0 0 2.5 9.425v5.153a2.11 2.11 0 0 0 2.107 2.107c.079 0 .143.064.143.143v.038c0 1.215.988 2.203 2.203 2.203h10.094c1.215 0 2.203-.988 2.203-2.241 0-.08.064-.143.143-.143a2.11 2.11 0 0 0 2.107-2.107V9.425a2.11 2.11 0 0 0-2.107-2.108"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.144 15.072a.927.927 0 0 1 0-1.853c.511 0 .927.416.927.926a.93.93 0 0 1-.927.927m-4.298-.116a.75.75 0 0 1-.53-1.28l4.408-4.407a.749.749 0 1 1 1.06 1.06l-4.408 4.408a.75.75 0 0 1-.53.219m.009-6.026c.511 0 .927.416.927.926a.93.93 0 0 1-.927.927.93.93 0 0 1-.926-.927c0-.51.416-.926.926-.926m9.538-1.613c-.079 0-.143-.064-.143-.181a2.205 2.205 0 0 0-2.203-2.202H6.953c-1.215 0-2.203.988-2.203 2.24a.143.143 0 0 1-.143.143A2.11 2.11 0 0 0 2.5 9.425v5.153a2.11 2.11 0 0 0 2.107 2.107c.079 0 .143.064.143.143v.038c0 1.215.988 2.203 2.203 2.203h10.094c1.215 0 2.203-.988 2.203-2.241 0-.08.064-.143.143-.143a2.11 2.11 0 0 0 2.107-2.107V9.425a2.11 2.11 0 0 0-2.107-2.108"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiscountTicketBold;
