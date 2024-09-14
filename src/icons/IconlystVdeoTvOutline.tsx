import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVdeoTvOutline = ({
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
      d="M2.334 7.685c0-2.639 2.14-4.779 4.778-4.779h9.943a4.78 4.78 0 0 1 4.779 4.78v5.456c0 2.64-2.14 4.779-4.78 4.779H7.113a4.78 4.78 0 0 1-4.778-4.78zm4.778-3.279a3.28 3.28 0 0 0-3.278 3.28v5.456a3.28 3.28 0 0 0 3.278 3.279h9.943a3.28 3.28 0 0 0 3.279-3.28V7.686a3.28 3.28 0 0 0-3.28-3.279zM6.838 20.344a.75.75 0 0 1 .75-.75h8.99a.75.75 0 1 1 0 1.5h-8.99a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.074 8.94c-.102.918-.106 1.91 0 2.951.024.17.09.22.116.234.03.017.134.057.344-.025a7.2 7.2 0 0 0 2.113-1.326c.166-.153.198-.284.198-.363s-.036-.208-.196-.354l-.003-.002a7.1 7.1 0 0 0-2.119-1.329l-.006-.002c-.164-.069-.271-.043-.32-.018-.036.02-.104.07-.127.234m1.025-1.6c-.519-.217-1.1-.222-1.595.038-.507.267-.838.766-.918 1.371l-.002.015a15.4 15.4 0 0 0 0 3.29l.001.017c.072.57.367 1.078.87 1.361.498.28 1.088.277 1.632.063l.005-.002a8.7 8.7 0 0 0 2.564-1.61l.004-.003c.429-.394.688-.912.685-1.477-.003-.563-.266-1.073-.687-1.456a8.6 8.6 0 0 0-2.56-1.608"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVdeoTvOutline;
