import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDivision3Bold = ({
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
      d="M13.5 7.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M13.5 16.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0M6.75 11a1 1 0 1 0 0 2h10.5a1 1 0 1 0 0-2z"
    />
  </Svg>
);
export default IconlystDivision3Bold;
