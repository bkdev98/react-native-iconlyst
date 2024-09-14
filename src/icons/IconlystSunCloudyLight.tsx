import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSunCloudyLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.019 4.973-.006.02m-4.428.544.009.016m7.936 2.174.036-.02m.549 4.455-.027-.008M12.508 8.81a3.464 3.464 0 1 1 4.893 4.674"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.414 16.13c0-2.17-1.533-3.444-3.43-3.461 0-1.365-1.071-4.095-4.095-4.095-1.499 0-2.518.67-3.164 1.514l-.322.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.362 17.115a2.12 2.12 0 0 1-1.248-1.934c0-1.33.94-2.11 2.102-2.12 0-.837.656-2.51 2.508-2.51 1.853 0 2.51 1.673 2.51 2.51M12.843 17.714a2.17 2.17 0 1 0-4.34 0M14.708 19.027a1.313 1.313 0 0 0-2.627 0M9.327 8.688a2.257 2.257 0 0 0-4.504-.218M3.114 9.593a1.184 1.184 0 0 1 2.295-.411"
    />
  </Svg>
);
export default IconlystSunCloudyLight;
