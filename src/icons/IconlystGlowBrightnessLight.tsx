import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlowBrightnessLight = ({
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
      d="m16.508 17.422 1.857 1.857m-.001-12.727-1.857 1.857zm-10.87 10.87-1.857 1.857zM5.637 6.552l1.857 1.857zM18.373 12.916H21m-9.001-9v2.627zm0 15.373v2.627zM3 12.916h2.627z"
    />
  </Svg>
);
export default IconlystGlowBrightnessLight;
