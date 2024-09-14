import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownEnterBroken = ({
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
      d="M20.098 15.848v1.8c0 1.99-1.612 3.6-3.6 3.6h-3.796M3.901 15.848v1.8a3.6 3.6 0 0 0 3.6 3.6H8.91M9.722 15.367 12 17.647l2.28-2.28M12.001 3.238h-5.6a2.5 2.5 0 0 0-2.5 2.5v2.17a2.5 2.5 0 0 0 2.5 2.5h11.2a2.5 2.5 0 0 0 2.5-2.5v-2.17a2.5 2.5 0 0 0-2.5-2.5h-.8M11.999 10.418v7.226"
    />
  </Svg>
);
export default IconlystDownEnterBroken;
