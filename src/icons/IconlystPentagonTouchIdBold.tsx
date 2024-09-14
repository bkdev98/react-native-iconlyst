import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPentagonTouchIdBold = ({
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
      d="M17.277 15.43a.75.75 0 0 1-1.5 0v-3.36c0-.784-.238-1.536-.689-2.179a.749.749 0 1 1 1.227-.861 5.26 5.26 0 0 1 .962 3.04zM14.44 8.174a.75.75 0 0 1-.979.41c-1.785-.731-3.831.011-4.745 1.617a.75.75 0 0 1-1.304-.741c1.275-2.245 4.151-3.271 6.617-2.264a.75.75 0 0 1 .411.978m.055 8.286a.75.75 0 0 1-1.5 0v-4.23a1.032 1.032 0 0 0-2.065 0v.48a.75.75 0 0 1-1.5 0v-.48a2.532 2.532 0 0 1 5.065 0zm-3.565 0a.75.75 0 0 1-1.5 0v-1.61a.75.75 0 0 1 1.5 0zm-2.703-1.03a.75.75 0 0 1-1.5 0v-2.8a.75.75 0 0 1 1.5 0zm12.467-8.173-3.955-3.952a2.78 2.78 0 0 0-1.947-.805H9.21c-.724 0-1.434.293-1.951.806L3.306 7.26A2.77 2.77 0 0 0 2.5 9.21v5.58c0 .73.286 1.422.809 1.953l3.952 3.953c.516.51 1.226.804 1.949.804h5.582c.722 0 1.432-.294 1.949-.806l3.955-3.953a2.77 2.77 0 0 0 .804-1.951V9.21c0-.731-.285-1.424-.806-1.953"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPentagonTouchIdBold;
