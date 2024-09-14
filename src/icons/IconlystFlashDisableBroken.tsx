import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlashDisableBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.43 6.604 1.266-3.09a.575.575 0 0 1 .54-.377h4.965c.397 0 .674.392.542.767L15.645 6.48M3.645 5.172l15.964 15.964M8.163 9.695l-1.17 2.857a.575.575 0 0 0 .54.774h3.929c.378 0 .653.358.556.723l-1.697 6.363c-.157.588.588.985.989.527l3.78-4.314M14.548 9.055a.575.575 0 0 0 .542.767h4.688c.494 0 .758.582.433.954L17.65 13.7"
    />
  </Svg>
);
export default IconlystFlashDisableBroken;
