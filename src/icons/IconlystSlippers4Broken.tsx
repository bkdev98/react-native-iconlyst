import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSlippers4Broken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.371 13.319c1.725 2.096 1.374 5.043-.382 6.794-1.751 1.756-4.698 2.107-6.794.383-2.788-2.292-7.936-6.618-7.936-6.618a6.006 6.006 0 0 1 0-8.494 6.005 6.005 0 0 1 8.495 0s2.38 2.833 4.546 5.434"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.529 13.52-.076-2.944 3.961-.9M9.465 10.565l-.98-.981"
    />
  </Svg>
);
export default IconlystSlippers4Broken;
