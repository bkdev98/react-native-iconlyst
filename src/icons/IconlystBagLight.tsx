import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBagLight = ({
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
      d="M7.117 21h9.765c.413 0 .808-.16 1.104-.447l1.617-1.57c.307-.298.48-.708.48-1.136v-7.694c0-.874-.709-1.583-1.584-1.583H5.5c-.875 0-1.584.709-1.584 1.583v7.694c0 .428.173.838.48 1.137l1.618 1.57c.295.286.691.447 1.103.447"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16 10.5V5.348c0-.328-.12-.641-.332-.86l-1.151-1.194A.93.93 0 0 0 13.85 3h-3.703a.92.92 0 0 0-.665.294L8.332 4.488a1.24 1.24 0 0 0-.332.86V10.5"
    />
  </Svg>
);
export default IconlystBagLight;
