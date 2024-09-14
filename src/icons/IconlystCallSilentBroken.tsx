import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCallSilentBroken = ({
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
      d="M12.915 13.161c3.091 2.54 3.967-1.092 6.152 1.13 2.262 2.308 3.559 2.773.694 5.695-.305.27-2.131 3.056-8.085-1.958M5.385 20.81 19.522 5.73M7.35 13.938C1.288 7.069 4.319 5.017 4.587 4.682c2.893-2.933 3.342-1.597 5.614.709 1.914 1.952-.566 2.883.45 5.198"
    />
  </Svg>
);
export default IconlystCallSilentBroken;
