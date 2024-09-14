import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHotspotBold = ({
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
      d="M3.793 11.01c0-2.203.857-4.273 2.415-5.83A.751.751 0 0 0 5.147 4.12a9.68 9.68 0 0 0-2.854 6.89 9.68 9.68 0 0 0 2.854 6.892.751.751 0 0 0 1.061-1.062 8.18 8.18 0 0 1-2.415-5.83"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.706 13.384a3.725 3.725 0 0 1 .25-5.023.751.751 0 0 0-1.06-1.063 5.22 5.22 0 0 0-.35 7.037.75.75 0 0 0 1.056.104.75.75 0 0 0 .104-1.055M16.194 7.299a.75.75 0 1 0-1.061 1.061 3.744 3.744 0 0 1 .25 5.026.75.75 0 1 0 1.164.947 5.24 5.24 0 0 0-.353-7.034"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.938 4.119a.751.751 0 0 0-1.061 1.062 8.18 8.18 0 0 1 2.416 5.829 8.18 8.18 0 0 1-2.416 5.829.75.75 0 1 0 1.061 1.06 9.67 9.67 0 0 0 2.855-6.89 9.68 9.68 0 0 0-2.855-6.89M12.944 12.616c.563-.317.95-.915.95-1.606 0-1.02-.83-1.851-1.85-1.851a1.854 1.854 0 0 0-1.854 1.85c0 .692.386 1.289.952 1.607L8.665 19.08a.75.75 0 1 0 1.4.536l1.978-5.16 1.976 5.16a.748.748 0 1 0 1.4-.536z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHotspotBold;
