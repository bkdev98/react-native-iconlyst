import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSettingAiAlt3Outline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.23 2.724a3.55 3.55 0 0 1 3.541 0l5.376 3.105a3.54 3.54 0 0 1 1.772 3.066v6.209a3.54 3.54 0 0 1-1.772 3.067l-5.375 3.104a3.54 3.54 0 0 1-3.543 0l-5.377-3.104a3.55 3.55 0 0 1-1.77-3.067V8.895a.75.75 0 0 1 1.5 0v6.209c0 .73.39 1.403 1.02 1.769l5.377 3.103c.632.365 1.41.365 2.042 0l5.376-3.104a2.04 2.04 0 0 0 1.022-1.768V8.895c0-.729-.39-1.403-1.021-1.767l-5.376-3.105a2.05 2.05 0 0 0-2.043 0 .75.75 0 1 1-.75-1.3"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.193 10.469a.75.75 0 0 1 .944.483 3.517 3.517 0 1 1-6.78.315.75.75 0 1 1 1.463.327 2.017 2.017 0 1 0 3.89-.182.75.75 0 0 1 .483-.943M6.428 8.949a.75.75 0 0 1-.704-.49l-.1-.273a3.01 3.01 0 0 0-1.78-1.782l-.273-.101a.75.75 0 0 1 0-1.407l.273-.1a3.01 3.01 0 0 0 1.78-1.783l.1-.273a.75.75 0 0 1 1.407 0l.101.273a3.01 3.01 0 0 0 1.779 1.782l.273.101a.75.75 0 0 1 0 1.407l-.273.1a3.01 3.01 0 0 0-1.779 1.783l-.1.273a.75.75 0 0 1-.704.49m.948-3.35a4.5 4.5 0 0 1-.948-.949 4.5 4.5 0 0 1-.949.95c.362.267.682.587.949.949.267-.362.587-.682.948-.95M11.738 10.191a.75.75 0 0 1-.717-.532 1.02 1.02 0 0 0-.678-.679.75.75 0 0 1 0-1.435 1.02 1.02 0 0 0 .678-.679.75.75 0 0 1 1.435 0c.099.326.353.58.678.68a.75.75 0 0 1 0 1.434 1.02 1.02 0 0 0-.678.68.75.75 0 0 1-.718.531"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSettingAiAlt3Outline;
