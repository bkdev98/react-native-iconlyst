import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageEditOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M4.038 3.897C5.022 2.841 6.423 2.25 8.077 2.25h4.9a.75.75 0 0 1 0 1.5h-4.9c-1.282 0-2.27.45-2.942 1.17-.677.726-1.087 1.789-1.087 3.106v.918h5.879a.75.75 0 1 1 0 1.5h-5.88v5.529c0 1.318.41 2.381 1.085 3.107.67.72 1.658 1.17 2.945 1.17h8.434c1.289 0 2.277-.45 2.946-1.17.675-.726 1.083-1.788 1.083-3.107v-4.379a.75.75 0 0 1 1.5 0v4.379c0 1.627-.507 3.078-1.484 4.129-.983 1.057-2.385 1.648-4.045 1.648H8.077c-1.658 0-3.06-.591-4.043-1.648-.978-1.05-1.486-2.501-1.486-4.13V8.027c0-1.628.511-3.079 1.49-4.129m14.369.778-4.22 4.607c-.217.244-.353.55-.39.877m0 0-.107.999a.337.337 0 0 0 .39.369l.97-.163a1.57 1.57 0 0 0 .912-.503l.007-.008 4.18-4.56.003-.004a.58.58 0 0 0-.033-.82l-.89-.825a.58.58 0 0 0-.822.03m1.84-1.13a2.08 2.08 0 0 0-2.941.112l-.003.003-4.225 4.613-.006.006a3.08 3.08 0 0 0-.765 1.719l-.108 1a1.837 1.837 0 0 0 2.128 2.009l.97-.162a3.07 3.07 0 0 0 1.781-.981l4.173-4.553.002-.002a2.08 2.08 0 0 0-.115-2.94zm-14.47 3.26a.75.75 0 0 1 .75-.75h.056a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m2.444 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 1 1 0 1.5h-.055a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageEditOutline;
