import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleTapBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.362 21.465c-2.154.181-4.456-.332-5.514-1.647-1.174-1.459-2.086-3.23-2.661-4.817-.308-.851.145-1.768.99-2.093a1.735 1.735 0 0 1 2.05.636l1.135 1.647V6.087a1.588 1.588 0 0 1 3.174-.024l.063 4.106c2.22.212 5.437.097 6.335 2.521.904 2.44.015 5.669-1.57 7.253"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.21 9.5C8.125 8.861 7.39 7.639 7.39 6.237c0-2.064 1.593-3.737 3.558-3.737s3.558 1.673 3.558 3.737c0 1.38-.711 2.585-1.77 3.232M5.45 8.362a4.74 4.74 0 0 1-.49-2.107c0-.757.177-1.472.49-2.107M16.357 8.362c.314-.635.49-1.35.49-2.107s-.176-1.472-.49-2.107"
    />
  </Svg>
);
export default IconlystDoubleTapBroken;
