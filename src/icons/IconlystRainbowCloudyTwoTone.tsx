import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRainbowCloudyTwoTone = ({
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
      d="M18.414 16.13c0-2.17-1.533-3.444-3.43-3.461 0-1.365-1.071-4.095-4.095-4.095-1.499 0-2.518.67-3.164 1.514l-.322.462"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.362 17.115a2.12 2.12 0 0 1-1.248-1.934c0-1.33.94-2.11 2.102-2.12 0-.837.656-2.51 2.508-2.51 1.853 0 2.51 1.673 2.51 2.51"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M12.843 17.714a2.17 2.17 0 1 0-4.34 0M14.708 19.027a1.313 1.313 0 0 0-2.627 0" />
    </G>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.327 8.688a2.257 2.257 0 0 0-4.504-.218M3.114 9.593a1.184 1.184 0 0 1 2.295-.411"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.462 10.428a4.01 4.01 0 0 0-4.03 2.44M18.733 7.922a7 7 0 0 0-4.199 2.857M21.115 5.244a9.08 9.08 0 0 0-8.314 3.76"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystRainbowCloudyTwoTone;
