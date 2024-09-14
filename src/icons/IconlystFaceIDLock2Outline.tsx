import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFaceIDLock2Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M5.088 5.203C4.41 5.93 4 6.993 4 8.31v7.947c0 1.318.409 2.38 1.084 3.107.67.72 1.66 1.17 2.948 1.17h8.434c1.29 0 2.278-.45 2.949-1.17.676-.727 1.085-1.79 1.085-3.107V8.31c0-1.318-.409-2.38-1.085-3.107-.67-.72-1.66-1.17-2.948-1.17H8.032c-1.284 0-2.273.45-2.944 1.17M3.99 4.181c.985-1.057 2.387-1.648 4.042-1.648h8.435c1.66 0 3.062.591 4.046 1.648C21.49 5.23 22 6.682 22 8.31v7.946c0 1.628-.509 3.078-1.487 4.129-.985 1.056-2.387 1.647-4.047 1.647H8.032c-1.66 0-3.062-.59-4.045-1.647-.979-1.051-1.487-2.501-1.487-4.129V8.31c0-1.628.511-3.079 1.49-4.13"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.485 11.94c-.554 0-1.003.448-1.003 1.004v1.983c0 .553.449 1.002 1.003 1.002h3.533c.554 0 1.003-.449 1.003-1.002v-1.983c0-.556-.45-1.005-1.003-1.005zm-2.503 1.004a2.503 2.503 0 0 1 2.503-2.504h3.533a2.503 2.503 0 0 1 2.503 2.504v1.983a2.503 2.503 0 0 1-2.503 2.502h-3.533a2.5 2.5 0 0 1-2.503-2.502z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.217 7.135a2.86 2.86 0 0 1 2.893 2.822v1.269a.75.75 0 0 1-1.5 0V9.972a1.36 1.36 0 0 0-2.717-.006v1.26a.75.75 0 0 1-1.5 0v-1.28a2.86 2.86 0 0 1 2.824-2.811"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFaceIDLock2Outline;
