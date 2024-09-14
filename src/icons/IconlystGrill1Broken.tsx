import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGrill1Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.361 12.228A8 8 0 0 1 4 6.289V4.184h16v2.105c0 1.32-.32 2.565-.885 3.662M9.344 13.836l-1.989 5.981m7.237-5.958 1.986 5.958M8.17 17.836h4.955M7.147 7.191h12.808"
    />
  </Svg>
);
export default IconlystGrill1Broken;
