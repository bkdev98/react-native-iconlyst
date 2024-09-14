import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoCutTrim2Broken = ({
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
      d="M12.084 3.46H7.853C5.058 3.46 3.084 5.203 3.084 8v8.003c0 2.786 1.974 4.536 4.769 4.536h8.462c2.795 0 4.769-1.74 4.769-4.536V7.999c0-2.797-1.974-4.538-4.769-4.538h-.717M21.079 15.598h-2.191m-3.076 0h-2.191m-3.076 0h-2.19m-3.076 0H3.088M21.079 8.398h-2.191m-3.076 0h-2.191m-3.076 0h-2.19m-3.076 0H3.088"
    />
  </Svg>
);
export default IconlystVideoCutTrim2Broken;
