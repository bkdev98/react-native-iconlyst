import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPasswordBoldsharp = ({
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
      d="M18.01 14.602h-1.5V12.75h-1.328v1.852h-1.5V12.75h-2.116a2.6 2.6 0 0 1-2.479 1.852A2.604 2.604 0 0 1 6.486 12a2.605 2.605 0 0 1 2.601-2.602 2.6 2.6 0 0 1 2.479 1.852h6.444zM2.5 21.75H22V2.25H2.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.09 10.898c-.61 0-1.105.494-1.105 1.102a1.103 1.103 0 0 0 2.205 0c0-.607-.494-1.102-1.1-1.102"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPasswordBoldsharp;
