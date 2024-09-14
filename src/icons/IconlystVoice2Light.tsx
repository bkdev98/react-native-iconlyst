import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoice2Light = ({
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
      <Path d="M12 22v-3.161M12 14.848a4.07 4.07 0 0 1-4.062-4.08V6.081C7.938 3.827 9.756 2 12 2c2.243 0 4.061 1.827 4.061 4.08v4.688c0 2.254-1.818 4.08-4.06 4.08" />
      <Path d="M20 10.8c0 4.44-3.582 8.038-8 8.038-4.42 0-8-3.599-8-8.037M14.069 6.756h1.989M13.07 10.093h2.99" />
    </G>
  </Svg>
);
export default IconlystVoice2Light;
