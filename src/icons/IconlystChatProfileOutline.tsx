import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatProfileOutline = ({
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
      d="M12.55 21.427a2.17 2.17 0 0 1-1.551-.646l-1.422-1.427a1.45 1.45 0 0 0-1.019-.422H7.49a4.666 4.666 0 0 1-4.654-4.668V7.325A4.666 4.666 0 0 1 7.49 2.658h10.122a4.666 4.666 0 0 1 4.654 4.667v6.94a4.666 4.666 0 0 1-4.654 4.667h-1.068a1.44 1.44 0 0 0-1.022.423l-1.42 1.426a2.17 2.17 0 0 1-1.55.646zm-.54-1.654a.756.756 0 0 0 1.077 0l1.423-1.426a2.85 2.85 0 0 1 2.032-.845h1.068a3.234 3.234 0 0 0 3.224-3.238V7.325a3.234 3.234 0 0 0-3.224-3.237H7.49a3.234 3.234 0 0 0-3.224 3.237v6.94a3.234 3.234 0 0 0 3.224 3.237h1.069a2.9 2.9 0 0 1 2.03.844z"
    />
    <Path
      fill={props.color}
      d="M17.228 18.936a.714.714 0 0 1-.714-.7c-.03-1.224-1.084-2.655-3.966-2.655-2.866 0-3.918 1.43-3.947 2.654a.7.7 0 0 1-.73.7.714.714 0 0 1-.7-.73c.047-2.016 1.727-4.051 5.374-4.051s5.348 2.035 5.393 4.05a.71.71 0 0 1-.7.732zM12.55 13.4a3.711 3.711 0 1 1-.022-7.421 3.711 3.711 0 0 1 .022 7.421m0-5.992a2.282 2.282 0 1 0 2.271 2.282 2.28 2.28 0 0 0-2.27-2.29z"
    />
  </Svg>
);
export default IconlystChatProfileOutline;
