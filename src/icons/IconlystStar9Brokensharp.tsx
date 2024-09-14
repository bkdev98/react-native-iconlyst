import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar9Brokensharp = ({
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
      strokeLinecap="square"
      strokeWidth={1.5}
      d="M7.55 13.947 3 12l4.55-1.947L5.71 5.46 10.3 7.3l1.95-4.55L14.2 7.3l4.59-1.84-1.84 4.593L21.5 12M16.95 13.947l1.84 4.594L14.2 16.7l-1.95 4.55-1.95-4.55-4.59 1.84"
    />
  </Svg>
);
export default IconlystStar9Brokensharp;
