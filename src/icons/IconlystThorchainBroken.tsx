import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThorchainBroken = ({
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
      d="m12.498 12 7.464-7.86c.494-.52-.059-1.348-.728-1.092L7.772 7.435l2.363 2.283m1.434 3.264.933-.982M12.502 12l4.725 4.565-11.462 4.387c-.67.256-1.221-.572-.728-1.092l3.732-3.93"
    />
  </Svg>
);
export default IconlystThorchainBroken;
