import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchBrokencurved = ({
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
      d="M20.075 11.264a8.56 8.56 0 0 1-8.561 8.56 8.56 8.56 0 0 1-8.561-8.56 8.56 8.56 0 0 1 8.56-8.561c3.13 0 5.869 1.68 7.362 4.187M18.726 19.886a1.411 1.411 0 1 1 1.41 1.411"
    />
  </Svg>
);
export default IconlystSearchBrokencurved;
