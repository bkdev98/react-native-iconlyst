import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBitcoinBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.014 19.4h5.295c2.15 0 3.87-1.844 3.66-4.037-.183-1.912-1.897-3.316-3.818-3.316H8.014v3.677M8.014 12.047h5.295c2.15 0 3.87-1.844 3.66-4.038-.183-1.912-1.897-3.316-3.818-3.316H8.014V8.37M13.583 21v-1.6M13.582 4.691V3M10.435 21v-1.6M10.435 4.691V3"
    />
  </Svg>
);
export default IconlystBitcoinBroken;
