import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystQuotationOpenBulk = ({
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
      d="M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M18.021 14.05a2.87 2.87 0 0 1-1.984 1.972 2.9 2.9 0 0 1-.744.098c-.937 0-1.86-.453-2.408-1.228-.6-.85-.741-2.018-.395-3.289a6.6 6.6 0 0 1 2.494-3.585.75.75 0 1 1 .869 1.222 5.08 5.08 0 0 0-1.916 2.756c-.223.82-.159 1.56.173 2.031.326.46.981.694 1.53.548.457-.127.802-.473.943-.95a1.48 1.48 0 0 0-.299-1.408 1.55 1.55 0 0 0-1.062-.509.75.75 0 0 1-.711-.787c.022-.413.344-.75.787-.71a3.03 3.03 0 0 1 2.108 1.011c.681.767.912 1.825.615 2.828m-6.454.001a2.87 2.87 0 0 1-1.984 1.971 2.8 2.8 0 0 1-.742.097c-.939.001-1.862-.452-2.409-1.227-.6-.849-.742-2.017-.398-3.289A6.6 6.6 0 0 1 8.53 8.018a.75.75 0 1 1 .869 1.222 5.1 5.1 0 0 0-1.918 2.757c-.221.82-.157 1.56.176 2.03.326.46.983.694 1.53.548.456-.127.801-.473.942-.95a1.47 1.47 0 0 0-.299-1.408 1.55 1.55 0 0 0-1.061-.509.75.75 0 0 1-.711-.787.743.743 0 0 1 .786-.71 3.04 3.04 0 0 1 2.108 1.011c.682.767.912 1.825.615 2.83"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystQuotationOpenBulk;
