import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar9Boldsharp = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="m22.772 12-5.176-2.214 2.093-5.226-5.222 2.094-2.216-5.173-2.218 5.173L4.812 4.56l2.093 5.226L1.729 12l5.176 2.214-2.093 5.226 5.22-2.094 2.219 5.173 2.217-5.173 5.22 2.094-2.092-5.226z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStar9Boldsharp;
