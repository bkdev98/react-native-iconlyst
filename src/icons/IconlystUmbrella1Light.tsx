import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUmbrella1Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.98 12.074a1.463 1.463 0 0 1-1.448 1.695H4.468a1.464 1.464 0 0 1-1.448-1.695C3.777 7.552 7.508 4.118 12 4.118c4.49 0 8.223 3.434 8.98 7.956"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.494 13.763C8.494 7.086 12 4.118 12 4.118s3.505 2.968 3.505 9.645M15.962 19.15a1.981 1.981 0 0 1-3.962 0v-5.38"
    />
  </Svg>
);
export default IconlystUmbrella1Light;
