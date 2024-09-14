import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSortsLight = ({
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
      d="M10.709 17.836h8.727M10.709 12h8.727M10.709 6.184h8.727M5.65 18.904a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17M5.65 13.084a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17M5.65 7.267a1.085 1.085 0 1 0 0-2.17 1.085 1.085 0 0 0 0 2.17"
    />
  </Svg>
);
export default IconlystSortsLight;
