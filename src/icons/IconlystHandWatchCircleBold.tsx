import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHandWatchCircleBold = ({
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
      d="M9.898 1.25a2.66 2.66 0 0 0-2.601 2.105l-.681 3.18a.75.75 0 0 0-.002.303A7.44 7.44 0 0 0 4.54 12c0 2.003.789 3.822 2.074 5.162q-.03.147.002.304l.68 3.179a2.66 2.66 0 0 0 2.602 2.104h4.163c1.257 0 2.343-.88 2.6-2.111l.724-3.446.006-.036A7.43 7.43 0 0 0 19.461 12c0-2-.788-3.817-2.07-5.156l-.006-.037-.724-3.445a2.66 2.66 0 0 0-2.6-2.112zm5.668 4.196-.373-1.776a1.16 1.16 0 0 0-1.133-.92H9.898a1.16 1.16 0 0 0-1.134.918l-.388 1.81A7.4 7.4 0 0 1 12 4.54c1.291 0 2.507.328 3.566.906m0 13.108A7.4 7.4 0 0 1 12 19.46c-1.314 0-2.55-.34-3.623-.938l.388 1.81a1.16 1.16 0 0 0 1.134.917h4.163c.548 0 1.02-.384 1.133-.92zm-.982-5.599c.36.21.47.67.26 1.03-.14.23-.39.36-.64.36-.13 0-.27-.03-.39-.1l-2.24-1.34a.76.76 0 0 1-.36-.64v-2.89a.749.749 0 1 1 1.5 0v2.46z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHandWatchCircleBold;
