import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWalletBold = ({
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
      d="M15.445 15.338c-1.51 0-2.74-1.23-2.74-2.75v-1.18c0-1.52 1.23-2.75 2.74-2.75 1.18 0 3.491.007 4.323.01a.287.287 0 0 0 .291-.307 5.197 5.197 0 0 0-5.174-4.783h-6.85c-2.87 0-5.2 2.34-5.2 5.21v6.43c0 2.87 2.33 5.2 5.2 5.2h6.85a5.19 5.19 0 0 0 5.176-4.784.287.287 0 0 0-.292-.305c-.83.002-3.143.01-4.324.01"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.245 12.708c-.4 0-.72-.32-.72-.71a.715.715 0 0 1 1.43 0c0 .39-.32.71-.71.71m3.67-2.55h-4.47c-.69 0-1.24.56-1.24 1.25v1.18c0 .69.55 1.25 1.24 1.25h4.47c.69 0 1.25-.56 1.25-1.25v-1.18c0-.69-.56-1.25-1.25-1.25"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWalletBold;
