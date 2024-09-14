import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIconBroken = ({
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
      d="M4.5 19.943v.05M5 20a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M20.5 4.007v.052M21 4a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M5.424 15.391a7.4 7.4 0 0 1-.686-3.175A7.72 7.72 0 0 1 9.03 5.302M12.479 4.494c1.119 0 2.201.234 3.157.685M19.444 8.84a7.6 7.6 0 0 1 .775 3.373 7.74 7.74 0 0 1-3.76 6.641M12.479 19.954a7.5 7.5 0 0 1-3.374-.776"
    />
  </Svg>
);
export default IconlystIconBroken;
