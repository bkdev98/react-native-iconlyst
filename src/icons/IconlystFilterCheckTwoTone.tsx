import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFilterCheckTwoTone = ({
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
      d="M18.402 4.406A2.6 2.6 0 0 1 21 7.005v1.32a3.65 3.65 0 0 1-1.206 2.712l-4.767 4.715a1.5 1.5 0 0 0-.493 1.107v1.925c0 .61-.371 1.159-.939 1.384l-1.821.726a1.49 1.49 0 0 1-2.041-1.384v-3.122c0-.395-.158-.774-.437-1.054l-4.227-3.763A3.65 3.65 0 0 1 4 8.99V7.005a2.6 2.6 0 0 1 2.599-2.599"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.563 5.276 2.147 2.151L16.135 3"
    />
  </Svg>
);
export default IconlystFilterCheckTwoTone;
