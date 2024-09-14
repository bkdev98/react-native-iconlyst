import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPotatosTwoTone = ({
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
      d="M10.248 11.92c-.185-1.189.085-2.3.895-3.11 1.268-1.267 2.818-.56 4.57-.208 1.398.281 2.26.35 3.63 1.599 2.295 2.295 2.019 5.009.315 6.713-1.073 1.073-2.757 1.28-4.43.712"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.464 12.078a2.285 2.285 0 0 1-2.61-1.486c-.696-1.994-3.728-2.115-4.973-.64-1.82 2.156-.51 6.2 1.136 7.945 2.27 2.409 5.955 3.464 8.675 1.534 1.108-.786 1.65-1.979 1.78-3.297.21-2.114-1.757-4.51-4.008-4.056"
    />
    <G
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      opacity={0.4}
    >
      <Path d="M16.248 8.517c-1.984-1.726-3.265-5.557-6.623-5.133-2.947.372-4.652 2.282-3.546 5.57M17.123 11.319c.196-.509.386-.74.982-.982M5.057 13.45c-.195.509-.385.74-.981.982M9.21 19.774c.196-.509.386-.74.982-.982M18.698 13.45c-.236.614-.465.895-1.186 1.186" />
      <Path d="M9.006 7.318c.237-.614.466-.894 1.186-1.186M13.389 13.507c-.237.614-.466.895-1.186 1.186M8.058 15.414c.236-.615.465-.895 1.186-1.186" />
    </G>
  </Svg>
);
export default IconlystPotatosTwoTone;
