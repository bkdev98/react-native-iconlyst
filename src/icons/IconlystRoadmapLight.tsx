import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRoadmapLight = ({
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
      strokeWidth={1.5}
      d="M3.5 12.067a1.588 1.588 0 1 1 3.177 0 1.588 1.588 0 0 1-3.177 0ZM10.911 12.067a1.588 1.588 0 1 1 3.177 0 1.588 1.588 0 0 1-3.177 0ZM18.324 12.067a1.588 1.588 0 1 1 3.176 0 1.588 1.588 0 0 1-3.177 0ZM14.088 12.067h4.235M6.677 12.067h4.235M12.956 18.877a1 1 0 0 1 1-1h4.5a1 1 0 0 1 1 1v1.2a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1zM16.206 12.067v1.588M16.206 15.877v2M8.794 10.48v1.587M5.544 5.361a1 1 0 0 0 1 1h4.5a1 1 0 0 0 1-1v-1.2a1 1 0 0 0-1-1h-4.5a1 1 0 0 0-1 1zM8.794 8.361v-2"
    />
  </Svg>
);
export default IconlystRoadmapLight;
