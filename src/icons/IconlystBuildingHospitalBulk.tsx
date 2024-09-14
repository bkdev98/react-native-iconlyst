import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuildingHospitalBulk = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M20.585 20.334V5.418a2.65 2.65 0 0 0-2.645-2.65H7.005a2.65 2.65 0 0 0-2.645 2.65v14.916z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M10.46 9.514a.749.749 0 1 1 0-1.5h1.26v-1.25a.749.749 0 1 1 1.5 0v1.25h1.26a.749.749 0 1 1 0 1.5h-1.26v1.26c0 .42-.33.75-.75.75-.41 0-.75-.33-.75-.75v-1.26z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.41 15.944c0-1 .81-1.82 1.82-1.82h2.49c1 0 1.82.82 1.82 1.82v4.389h5.93c.42 0 .75.34.75.75 0 .42-.33.75-.75.75h-18a.749.749 0 1 1 0-1.5h5.94zm1.5 4.389h3.13v-4.39c0-.18-.15-.32-.32-.32h-2.49c-.18 0-.32.14-.32.32z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBuildingHospitalBulk;
