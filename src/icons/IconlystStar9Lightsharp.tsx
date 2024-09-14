import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar9Lightsharp = ({
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
      strokeWidth={1.5}
      d="m12.25 2.31 1.947 4.55 4.594-1.84-1.84 4.594L21.5 11.56l-4.55 1.947 1.84 4.594-4.593-1.84-1.947 4.55-1.947-4.55L5.71 18.1l1.84-4.594L3 11.56l4.55-1.946L5.71 5.02l4.593 1.84z"
    />
  </Svg>
);
export default IconlystStar9Lightsharp;
