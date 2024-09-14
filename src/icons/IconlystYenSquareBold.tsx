import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystYenSquareBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m15.445 9.072-1.885 2.352h.945a.75.75 0 0 1 0 1.5H12.75v3.54a.75.75 0 0 1-1.5 0v-3.54H9.499a.75.75 0 0 1 0-1.5h.938L8.554 9.072a.751.751 0 0 1 1.172-.937l2.273 2.839 2.276-2.84a.748.748 0 1 1 1.17.938m.772-6.51H7.783c-3.16 0-5.283 2.224-5.283 5.53v7.952c0 3.3 2.123 5.518 5.283 5.518h8.433c3.161 0 5.284-2.218 5.284-5.518V8.092c0-3.307-2.123-5.53-5.283-5.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystYenSquareBold;
