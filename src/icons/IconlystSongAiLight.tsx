import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSongAiLight = ({
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
      d="M16.353 16.827a3.393 3.393 0 1 1-6.786 0 3.393 3.393 0 0 1 6.786 0"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.352 16.222V4.22s1.039 2.703 3.834 3.272M6.69 6.24l-.112.302a4.17 4.17 0 0 1-2.462 2.466l-.302.112.302.112a4.17 4.17 0 0 1 2.462 2.465L6.69 12l.112-.303a4.17 4.17 0 0 1 2.462-2.465l.302-.112-.302-.112a4.17 4.17 0 0 1-2.462-2.466zM11.72 3.78a1.77 1.77 0 0 1-1.176 1.178 1.77 1.77 0 0 1 1.177 1.179 1.77 1.77 0 0 1 1.176-1.179 1.77 1.77 0 0 1-1.176-1.178"
    />
  </Svg>
);
export default IconlystSongAiLight;
