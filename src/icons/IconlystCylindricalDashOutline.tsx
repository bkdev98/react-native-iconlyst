import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCylindricalDashOutline = ({
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
      d="M5.627 5.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75M18.873 5.75a.75.75 0 0 1 .75.75v11a.75.75 0 0 1-1.5 0v-11a.75.75 0 0 1 .75-.75M12.25 14.75c-.562 0-1.107.04-1.623.113a.75.75 0 1 1-.211-1.485 13 13 0 0 1 3.66 0 .75.75 0 1 1-.213 1.484 11.4 11.4 0 0 0-1.613-.112"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.896 14.812a.75.75 0 0 1-.252 1.03C6.732 16.396 6.377 17 6.377 17.5a.75.75 0 0 1-1.5 0c0-1.259.873-2.263 1.989-2.94a.75.75 0 0 1 1.03.252M16.603 14.812a.75.75 0 0 1 1.03-.252c1.116.677 1.989 1.681 1.989 2.94a.75.75 0 0 1-1.5 0c0-.501-.355-1.104-1.267-1.658a.75.75 0 0 1-.252-1.03"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.627 16.751a.75.75 0 0 1 .75.75c0 .551.436 1.228 1.54 1.811 1.07.566 2.601.939 4.333.939s3.262-.373 4.333-.939c1.104-.583 1.54-1.26 1.54-1.811a.75.75 0 1 1 1.5 0c0 1.382-1.047 2.455-2.34 3.138-1.326.7-3.107 1.112-5.033 1.112s-3.707-.411-5.034-1.112c-1.292-.683-2.34-1.756-2.34-3.138a.75.75 0 0 1 .75-.75M7.917 4.688c-1.104.584-1.54 1.26-1.54 1.812 0 .55.436 1.228 1.54 1.812 1.07.565 2.601.938 4.333.938s3.262-.373 4.333-.938c1.104-.584 1.54-1.261 1.54-1.812s-.436-1.228-1.54-1.812c-1.07-.565-2.601-.938-4.333-.938s-3.262.373-4.333.938m-.7-1.326c1.326-.701 3.107-1.112 5.033-1.112s3.707.41 5.034 1.112c1.292.683 2.339 1.756 2.339 3.138s-1.047 2.455-2.34 3.138c-1.326.7-3.107 1.112-5.033 1.112s-3.707-.411-5.034-1.112c-1.292-.683-2.34-1.756-2.34-3.138s1.048-2.455 2.34-3.138"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCylindricalDashOutline;
