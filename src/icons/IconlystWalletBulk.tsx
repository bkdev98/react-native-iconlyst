import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletBulk = ({
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
      d="M14.412 11.879a3.29 3.29 0 0 1 3.282-3.29h4.002a.29.29 0 0 0 .291-.303c-.177-2.841-2.54-5.098-5.422-5.098h-8.13A5.445 5.445 0 0 0 3 8.628v6.74c0 3 2.439 5.442 5.436 5.442h8.129c3.022 0 5.28-2.447 5.427-5.351a.29.29 0 0 0-.292-.3h-4.006a3.284 3.284 0 0 1-3.282-3.28"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.788 12.571h-.003a.75.75 0 1 1 .003 0m-.095-2.48c-.982 0-1.78.802-1.78 1.79 0 .981.798 1.78 1.78 1.78H21.7a.3.3 0 0 0 .3-.3v-2.97a.3.3 0 0 0-.3-.3z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M12.845 8.71h-5.08a.75.75 0 0 1 0-1.5h5.08a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystWalletBulk;
