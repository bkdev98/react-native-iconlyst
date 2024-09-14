import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.627 5.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75M18.873 5.75a.75.75 0 0 1 .75.75v11a.75.75 0 1 1-1.5 0v-11a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.917 15.69c-1.104.583-1.54 1.26-1.54 1.81 0 .552.436 1.229 1.54 1.812 1.07.566 2.601.938 4.333.938 1.731 0 3.262-.372 4.332-.938 1.104-.583 1.54-1.26 1.54-1.811s-.436-1.228-1.54-1.812c-1.07-.566-2.6-.938-4.332-.938s-3.263.373-4.333.938m-.7-1.327c1.326-.701 3.107-1.112 5.033-1.112s3.707.41 5.033 1.112c1.293.683 2.34 1.756 2.34 3.138s-1.047 2.454-2.34 3.137c-1.327.701-3.107 1.112-5.033 1.112s-3.707-.41-5.034-1.111c-1.292-.684-2.34-1.756-2.34-3.138s1.048-2.455 2.34-3.138M7.917 4.688c-1.104.584-1.54 1.26-1.54 1.812 0 .55.436 1.228 1.54 1.811 1.07.566 2.601.938 4.333.938 1.731 0 3.262-.372 4.332-.938 1.104-.583 1.54-1.26 1.54-1.811s-.436-1.228-1.54-1.812c-1.07-.565-2.6-.938-4.332-.938s-3.263.373-4.333.938m-.7-1.326c1.326-.701 3.107-1.112 5.033-1.112s3.707.41 5.033 1.112c1.293.683 2.34 1.756 2.34 3.138s-1.047 2.454-2.34 3.138c-1.327.7-3.107 1.111-5.033 1.111s-3.707-.41-5.034-1.111c-1.292-.684-2.34-1.756-2.34-3.138s1.048-2.455 2.34-3.138"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCylindricalOutline;
