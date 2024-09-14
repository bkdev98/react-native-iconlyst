import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloudShareOutline = ({
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
      d="M7.847 4.842c.898-1.186 2.334-2.135 4.403-2.135 2.07 0 3.505.949 4.403 2.135a6.35 6.35 0 0 1 1.187 2.807c1.04.13 1.993.557 2.73 1.262.902.865 1.43 2.102 1.43 3.585a4.89 4.89 0 0 1-2.878 4.458.75.75 0 0 1-.617-1.367 3.39 3.39 0 0 0 1.995-3.091c0-1.113-.387-1.946-.968-2.502-.586-.56-1.419-.888-2.385-.888a.75.75 0 0 1-.75-.75c0-.659-.27-1.723-.94-2.61-.647-.854-1.66-1.539-3.207-1.539s-2.56.685-3.207 1.54c-.67.886-.94 1.95-.94 2.609a.75.75 0 0 1-.744.75c-.97.008-1.804.336-2.39.896-.581.554-.969 1.382-.969 2.494 0 1.374.817 2.559 1.995 3.09a.75.75 0 1 1-.617 1.368A4.89 4.89 0 0 1 2.5 12.496c0-1.484.529-2.717 1.433-3.579.736-.703 1.689-1.128 2.726-1.264a6.35 6.35 0 0 1 1.188-2.811"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.104 17.251a.75.75 0 0 1 0 1.06l-.85.85.85.851a.75.75 0 0 1-1.06 1.06l-1.381-1.38a.75.75 0 0 1 0-1.06l1.38-1.381a.75.75 0 0 1 1.061 0M15.398 17.25a.75.75 0 0 1 1.06.001l1.38 1.38a.75.75 0 0 1 0 1.06l-1.38 1.382a.75.75 0 1 1-1.06-1.06l.85-.851-.85-.85a.75.75 0 0 1 0-1.061"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.021 13.168a.75.75 0 0 1 .75.75v3.472a2.524 2.524 0 0 1-2.524 2.523H7.193a.75.75 0 0 1 0-1.5h2.054c.566 0 1.024-.458 1.024-1.023v-3.472a.75.75 0 0 1 .75-.75M13.48 13.168a.75.75 0 0 1 .75.75v3.472c0 .565.459 1.023 1.024 1.023h2.054a.75.75 0 1 1 0 1.5h-2.054a2.524 2.524 0 0 1-2.524-2.523v-3.472a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloudShareOutline;
