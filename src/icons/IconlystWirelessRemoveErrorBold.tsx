import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWirelessRemoveErrorBold = ({
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
      d="M11.234 18.105a1 1 0 1 0 1.379 1.449c.466-.444 1.268-.444 1.735 0a1 1 0 1 0 1.378-1.449c-1.215-1.154-3.278-1.154-4.493 0M13.482 12.89a7.54 7.54 0 0 0-5.18 2.05A1 1 0 0 0 9.67 16.4a5.55 5.55 0 0 1 3.81-1.51c1.43 0 2.787.537 3.822 1.51a1 1 0 0 0 1.413-.044 1 1 0 0 0-.044-1.413 7.55 7.55 0 0 0-5.19-2.052M14.485 9.49a1 1 0 0 0-1-1 11.89 11.89 0 0 0-8.182 3.232 1 1 0 0 0 1.37 1.456 9.9 9.9 0 0 1 6.812-2.688 1 1 0 0 0 1-1M14.484 5.17a1 1 0 0 0-1-1c-4.14 0-8.088 1.55-11.121 4.367a1 1 0 0 0 1.36 1.466 14.3 14.3 0 0 1 9.76-3.833 1 1 0 0 0 1-1M20.484 8.51l1.265-1.262a1 1 0 0 0-1.413-1.416l-1.268 1.265L17.8 5.832a1 1 0 0 0-1.412 1.416l1.265 1.262-1.265 1.262a1 1 0 0 0 1.412 1.416l1.268-1.266 1.268 1.266a.997.997 0 0 0 1.414-.002 1 1 0 0 0-.001-1.414z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWirelessRemoveErrorBold;
