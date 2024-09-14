import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBox2Broken = ({
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
      d="M20.962 15.27c0 .869-.465 1.672-1.217 2.106l-5.679 3.279a2.43 2.43 0 0 1-2.433 0l-5.68-3.279a2.43 2.43 0 0 1-1.216-2.106V8.712c0-.87.464-1.673 1.217-2.108l5.679-3.279a2.44 2.44 0 0 1 2.433 0l5.68 3.28a2.43 2.43 0 0 1 1.216 2.107v3.279"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m20.625 7.465-7.772 4.496-7.771-4.496M12.852 17.802v-5.848"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.652 12.282v-2.74l5.184-2.999"
    />
  </Svg>
);
export default IconlystDeliveryBox2Broken;
