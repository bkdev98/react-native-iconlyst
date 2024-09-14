import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCheckSquareBold = ({
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
      fillRule="evenodd"
      d="m15.993 10.222-4.618 4.618a.746.746 0 0 1-1.061 0l-2.309-2.309a.75.75 0 0 1 1.06-1.061l1.78 1.779 4.087-4.088a.75.75 0 1 1 1.061 1.061m.224-7.722H7.782C4.623 2.5 2.5 4.721 2.5 8.027v7.948c0 3.305 2.123 5.525 5.282 5.525h8.434c3.16 0 5.284-2.22 5.284-5.525V8.027c0-3.306-2.123-5.527-5.283-5.527"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCheckSquareBold;
