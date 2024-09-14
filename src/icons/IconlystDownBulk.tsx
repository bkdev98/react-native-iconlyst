import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownBulk = ({
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
      d="m14.277 20.57-3.363-4.286a1.125 1.125 0 0 1 .885-1.82h6.725a1.127 1.127 0 0 1 1.125 1.126c0 .247-.081.493-.24.694l-3.362 4.285a1.122 1.122 0 0 1-1.77 0"
    />
    <Path
      fill={props.color}
      d="M14.035 10.455v4.01h2.25v-4.01C16.285 6.344 12.942 3 8.832 3H5.476a1.125 1.125 0 1 0 0 2.25h3.356a5.21 5.21 0 0 1 5.203 5.205"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDownBulk;
