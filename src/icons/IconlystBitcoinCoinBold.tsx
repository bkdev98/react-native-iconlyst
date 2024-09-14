import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinCoinBold = ({
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
      d="M7.539 13.1a4.056 4.056 0 0 0-4.051 4.05 4.056 4.056 0 0 0 4.05 4.05 4.055 4.055 0 0 0 4.05-4.05 4.055 4.055 0 0 0-4.05-4.05M18.401 9.7h-2.765V7.64h2.7649999999999997c.568 0 1.031.462 1.031 1.03s-.463 1.03-1.03 1.03m-.192-4.96a.7.7 0 0 1 .02 1.4l-.943-.002q-.824-.002-1.65 0V4.74zm-2.459 7.4a.75.75 0 0 0 .75-.75v-.19h.98v.19a.75.75 0 0 0 1.5 0v-.263a2.53 2.53 0 0 0 1.952-2.457c0-.791-.372-1.49-.943-1.954.261-.361.42-.8.42-1.276 0-.941-.597-1.74-1.429-2.053V3.05a.75.75 0 0 0-1.5 0v.19h-.98v-.19a.75.75 0 0 0-1.5 0v.19h-.659a.742.742 0 0 0-.205 1.459V9.74a.74.74 0 0 0-.547.709c0 .414.336.75.75.75H15v.19c0 .414.336.75.75.75M3.75 8.78c0-1.667.941-3.12 2.321-3.853l.903.903a.75.75 0 0 0 1.233-.268l.607-1.63a.752.752 0 0 0-.703-1.012A5.867 5.867 0 0 0 2.25 8.78a.75.75 0 0 0 1.5 0M21 15.09a.75.75 0 0 0-.75.75 4.36 4.36 0 0 1-2.314 3.849l-.91-.91a.752.752 0 0 0-1.233.27l-.607 1.64a.75.75 0 0 0 .703 1.01 5.867 5.867 0 0 0 5.861-5.86.75.75 0 0 0-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBitcoinCoinBold;
