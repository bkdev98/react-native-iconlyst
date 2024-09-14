import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLedgerBold = ({
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
      d="M9.555 21.031a.3.3 0 0 0 .3.3h4.29a.3.3 0 0 0 .3-.3v-4.956a.3.3 0 0 0-.3-.3h-4.29a.3.3 0 0 0-.3.3zM2.5 13.976a.3.3 0 0 0 .3.3h4.955a.3.3 0 0 0 .3-.3v-4.29a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3zM9.555 13.976a.3.3 0 0 0 .3.3H21.2a.3.3 0 0 0 .3-.3V5.832c0-1.93-1.57-3.5-3.5-3.5H9.855a.3.3 0 0 0-.3.3zM7.755 7.886a.3.3 0 0 0 .3-.3V2.631a.3.3 0 0 0-.3-.3H6c-1.93 0-3.5 1.571-3.5 3.5v1.755a.3.3 0 0 0 .3.3zM8.055 16.076a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3v1.756c0 1.929 1.57 3.5 3.5 3.5h1.755a.3.3 0 0 0 .3-.3zM16.245 15.776a.3.3 0 0 0-.3.3v4.956a.3.3 0 0 0 .3.3H18c1.93 0 3.5-1.571 3.5-3.5v-1.756a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystLedgerBold;
