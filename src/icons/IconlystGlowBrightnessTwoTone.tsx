import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlowBrightnessTwoTone = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.008 17.422 1.857 1.857m-.001-12.727-1.857 1.857zm-10.87 10.87-1.857 1.857zM6.137 6.552l1.857 1.857z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.873 12.916H21.5m-9.001-9v2.627zm0 15.373v2.627zM3.5 12.916h2.627z"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystGlowBrightnessTwoTone;
