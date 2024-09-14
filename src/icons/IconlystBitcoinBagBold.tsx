import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinBagBold = ({
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
      d="M12.28 11.755h-1.448v1.65h1.515a.828.828 0 0 0 .82-.909c-.04-.415-.43-.741-.888-.741M12.28 14.905h-1.448v1.64h1.515a.82.82 0 0 0 .82-.899c-.04-.415-.43-.741-.888-.741"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.722 6.77c.1-.69.42-1.33.93-1.83.62-.62 1.44-.96 2.32-.96 1.62.01 3.02 1.21 3.26 2.79zm5.939 8.734a2.33 2.33 0 0 1-.591 1.781c-.412.453-.99.715-1.6.747v.192a.75.75 0 0 1-1.5 0v-.18h-.888a.75.75 0 0 1-.75-.75v-6.29a.75.75 0 0 1 .75-.75h.887v-.18a.75.75 0 0 1 1.5 0v.199c1.139.09 2.085.966 2.192 2.08a2.34 2.34 0 0 1-.595 1.793l-.03.024c.341.361.575.82.625 1.334m6.222.247-.73-5.7c-.54-2.42-2.09-3.28-3.37-3.28h-.02c-.26-2.41-2.3-4.29-4.77-4.29-1.27 0-2.49.49-3.4 1.39-.79.78-1.27 1.8-1.39 2.9-1.27.02-2.89.9-3.33 3.32l-.73 5.65c-.29 1.95-.02 3.37.82 4.35.83.97 2.18 1.43 4.13 1.43h7.81c1.77 0 3.17-.53 4.04-1.54.88-1.02 1.2-2.44.94-4.23"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinBagBold;
