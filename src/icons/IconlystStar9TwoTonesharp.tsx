import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar9TwoTonesharp = ({
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
      d="M19.225 12.974 21.5 12l-4.55-1.947 1.84-4.594-4.593 1.84L12.25 2.75 10.303 7.3 5.71 5.46l1.84 4.593L3 12l2.275.973"
    />
    <Path
      stroke={props.color}
      strokeLinecap="square"
      strokeWidth={1.5}
      d="m19.225 12.973-2.275.974 1.84 4.594-4.593-1.84-1.947 4.549-1.947-4.55-4.594 1.84 1.84-4.593-2.274-.974"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystStar9TwoTonesharp;
