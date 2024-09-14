import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <G
      fill="none"
      fillRule="evenodd"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <Path d="M12 22v-3.161M12 14.848c-2.243 0-4.062-1.826-4.062-4.08V6.081C7.938 3.827 9.757 2 12 2s4.062 1.827 4.062 4.08v4.688A4.07 4.07 0 0 1 12 14.848" />
      <Path d="M20 10.8c0 4.44-3.581 8.038-8 8.038s-8-3.599-8-8.037" />
    </G>
  </Svg>
);
export default IconlystVoiceLight;
