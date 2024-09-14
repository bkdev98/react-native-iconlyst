import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystConnectingCableBroken = ({
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
      d="m12.67 16.985-4.935-4.934a.76.76 0 0 0-1.076 0l-.853.853a3.838 3.838 0 0 0 4.784 5.946M5.803 18.332 3 21.135M11.345 7.305l4.92 4.92a.76.76 0 0 0 1.075 0l.853-.853a3.838 3.838 0 0 0-4.705-5.995M18.197 5.94 21 3.137M8.496 12.81l1.681-1.681m1.15 4.512 1.681-1.681"
    />
  </Svg>
);
export default IconlystConnectingCableBroken;
