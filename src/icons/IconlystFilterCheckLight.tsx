import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterCheckLight = ({
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
      d="M18.882 4.406a2.6 2.6 0 0 1 2.599 2.599v1.32a3.65 3.65 0 0 1-1.207 2.712l-4.767 4.715a1.5 1.5 0 0 0-.492 1.107v1.925c0 .61-.372 1.159-.94 1.384l-1.82.726a1.49 1.49 0 0 1-2.042-1.384v-3.122c0-.395-.157-.774-.437-1.054L5.55 11.572A3.65 3.65 0 0 1 4.48 8.99V7.005a2.6 2.6 0 0 1 2.6-2.599"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.043 5.276 2.147 2.151L16.615 3"
    />
  </Svg>
);
export default IconlystFilterCheckLight;