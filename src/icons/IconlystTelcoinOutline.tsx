import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTelcoinOutline = ({
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
      d="M10.806 21.749c-.81 0-1.59-.302-2.186-.848l-4.924-4.516a3.24 3.24 0 0 1-.97-3.078l1.45-6.523a3.24 3.24 0 0 1 2.18-2.378l6.375-2.007a3.24 3.24 0 0 1 3.15.7l4.925 4.517a3.24 3.24 0 0 1 .968 3.079l-1.45 6.522a3.24 3.24 0 0 1-2.178 2.378l-6.375 2.007a3.2 3.2 0 0 1-.965.147m2.89-18c-.174 0-.348.027-.514.08L6.807 5.836A1.73 1.73 0 0 0 5.64 7.108L4.19 13.63a1.74 1.74 0 0 0 .52 1.648l4.924 4.515a1.73 1.73 0 0 0 1.687.375l6.372-2.005a1.73 1.73 0 0 0 1.167-1.273l1.45-6.523a1.74 1.74 0 0 0-.52-1.648l-4.924-4.515a1.73 1.73 0 0 0-1.17-.455z"
    />
    <Path
      fill={props.color}
      d="M13.259 16.565h-.831a2.388 2.388 0 0 1-2.343-2.853l.517-2.77h-.83a.75.75 0 0 1-.27-1.45c1.07-.414 1.4-.66 1.67-1.59a.75.75 0 0 1 1.457.347l-.222 1.193h1.878a.75.75 0 1 1 0 1.5h-2.158l-.57 3.054a.89.89 0 0 0 .87 1.069h.832a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystTelcoinOutline;
