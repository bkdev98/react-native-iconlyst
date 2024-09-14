import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVoiceWaveAiLight = ({
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
      d="M19.688 9.912v1.771M15.523 6.709v4.089M7.195 6.84v10.45M3.031 10.176v3.911M11.36 20.249v-1.255M11.36 3.75v4.125M17.153 15.05l.1.273a3.76 3.76 0 0 0 2.222 2.225l.273.101-.273.101a3.76 3.76 0 0 0-2.221 2.225l-.101.274-.101-.274a3.76 3.76 0 0 0-2.222-2.225l-.273-.1.273-.102a3.76 3.76 0 0 0 2.222-2.225zM12 12a2.11 2.11 0 0 0 1.404 1.406c-.672.206-1.2.733-1.404 1.407a2.11 2.11 0 0 0-1.404-1.407A2.11 2.11 0 0 0 12 12"
    />
  </Svg>
);
export default IconlystVoiceWaveAiLight;
