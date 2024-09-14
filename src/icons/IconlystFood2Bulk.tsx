import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood2Bulk = ({
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
      d="M3.92 4.068c.932-1 2.266-1.568 3.864-1.568h8.434c1.597 0 2.93.567 3.862 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.576-.494 2.962-1.423 3.958-.932 1-2.266 1.568-3.86 1.568H7.784c-1.597 0-2.931-.567-3.863-1.568-.928-.997-1.42-2.383-1.42-3.958V8.026c0-1.575.492-2.961 1.42-3.958"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12 7.436c.305 0 .552.247.552.552V8.7c1.209.099 2.3.522 3.112 1.232.94.822 1.488 2.014 1.415 3.471a.307.307 0 0 1-.306.292H7.227a.307.307 0 0 1-.306-.292c-.073-1.457.474-2.649 1.415-3.47.812-.711 1.903-1.134 3.112-1.233v-.712c0-.305.247-.552.552-.552M6.784 14.36a.67.67 0 0 0-.43.138.62.62 0 0 0-.214.36c-.051.235.008.503.078.715.198.593.753.993 1.378.993h8.807c.626 0 1.181-.4 1.379-.993.07-.212.129-.48.078-.716a.62.62 0 0 0-.214-.36.67.67 0 0 0-.43-.137z"
    />
  </Svg>
);
export default IconlystFood2Bulk;
