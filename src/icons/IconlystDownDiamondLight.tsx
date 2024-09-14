import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDownDiamondLight = ({
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
      d="m14.812 19.77 4.958-4.958c1.733-1.733 1.589-4.035-.143-5.767l-4.672-4.672c-1.731-1.731-4.033-1.876-5.767-.143L4.23 9.19c-1.733 1.733-1.588 4.035.143 5.766l4.672 4.672c1.732 1.732 4.039 1.872 5.767.144"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14.793 12.776-2.794 2.804-2.792-2.804M12 15.58V8.42"
    />
  </Svg>
);
export default IconlystDownDiamondLight;
