import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRefreshBold = ({
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
      d="M21.399 11.625c-.95-2.568-4.357-2.446-6.71-2.671l-.066-4.348a1.68 1.68 0 0 0-3.362.025v9.913a.644.644 0 0 1-.966.558l-1.232-.712a1.962 1.962 0 0 0-2.896 1.273 1.87 1.87 0 0 0 .675 1.903c1.02.776 2.722 1.991 4.347 2.767 2.543 1.215 6.626.895 8.548-1.028 1.678-1.677 2.62-5.096 1.662-7.68"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.112 5.393c-.599-.599-1.37-.93-2.164-.994a.79.79 0 0 0-1.275-.895L3.555 4.622a.795.795 0 0 0 0 1.123l1.14 1.141a.792.792 0 0 0 1.277-.891c.375.061.732.235 1.017.52.727.728.727 1.911.001 2.637a1.867 1.867 0 0 1-2.638.001 1.87 1.87 0 0 1-.512-1.676.794.794 0 0 0-1.56-.299 3.46 3.46 0 0 0 .95 3.097 3.44 3.44 0 0 0 2.44 1.01c.885 0 1.77-.337 2.443-1.01a3.46 3.46 0 0 0-.001-4.882"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapRefreshBold;
