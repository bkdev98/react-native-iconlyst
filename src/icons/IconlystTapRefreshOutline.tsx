import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapRefreshOutline = ({
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
      d="M12.898 4.2a.84.84 0 0 0-.838.837v9.366c0 1.046-1.132 1.7-2.038 1.176l-1.164-.672a1.103 1.103 0 0 0-1.629.716c-.09.406.056.806.36 1.038.954.727 2.513 1.836 3.976 2.534 1.052.503 2.473.705 3.855.557 1.39-.148 2.622-.635 3.368-1.381.672-.673 1.235-1.741 1.518-2.948.283-1.204.268-2.467-.121-3.518-.326-.88-1.07-1.352-2.153-1.625-.82-.206-1.7-.27-2.58-.334a43 43 0 0 1-.974-.078.75.75 0 0 1-.679-.735l-.063-4.109a.84.84 0 0 0-.838-.825m-2.338.837a2.338 2.338 0 0 1 4.676-.036l.052 3.428.157.011c.914.066 1.995.144 2.953.386 1.306.329 2.62 1.012 3.194 2.558.515 1.39.507 2.964.175 4.381-.332 1.415-1.007 2.755-1.919 3.667-1.07 1.07-2.675 1.642-4.269 1.812-1.6.17-3.31-.05-4.66-.695-1.608-.767-3.267-1.954-4.239-2.695a2.52 2.52 0 0 1-.915-2.557 2.603 2.603 0 0 1 3.843-1.69l.952.55zm.212 9.243"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.129 6.224a.75.75 0 0 0 1.013.313 1.763 1.763 0 1 1-.907 1.223.75.75 0 1 0-1.473-.284 3.262 3.262 0 1 0 1.68-2.265.75.75 0 0 0-.313 1.013"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.116 3.97a.75.75 0 0 1 0 1.06l-.553.553.553.554a.75.75 0 0 1-1.06 1.06L3.971 6.114a.75.75 0 0 1 0-1.06L5.055 3.97a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapRefreshOutline;
