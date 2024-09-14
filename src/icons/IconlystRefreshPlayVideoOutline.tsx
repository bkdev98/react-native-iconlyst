import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRefreshPlayVideoOutline = ({
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
      d="M6.057 18.761a1 1 0 0 1-.169-.019l-2.963-.685a.75.75 0 1 1 .338-1.462l2.232.516.512-2.216a.75.75 0 1 1 1.461.338l-.681 2.947a.75.75 0 0 1-.73.581M17.446 9.689a.75.75 0 0 1-.731-.92l.682-2.945a.75.75 0 0 1 .9-.562l2.962.685a.75.75 0 0 1-.338 1.46l-2.231-.514-.513 2.215a.75.75 0 0 1-.731.58"
    />
    <Path
      fill={props.color}
      d="M6.058 18.509a.75.75 0 0 1-.539-.23 9.09 9.09 0 0 1 8.146-15.261.75.75 0 1 1-.264 1.476 7.591 7.591 0 0 0-6.8 12.744.75.75 0 0 1-.539 1.27zM12.12 21.12a9 9 0 0 1-1.6-.144.748.748 0 0 1-.31-1.364.75.75 0 0 1 .574-.112 7.592 7.592 0 0 0 6.8-12.744.75.75 0 1 1 1.078-1.042 9.09 9.09 0 0 1-6.542 15.4z"
    />
    <Path
      fill={props.color}
      d="M11.567 15.51a1.8 1.8 0 0 1-.936-.252 1.88 1.88 0 0 1-.888-1.43 17 17 0 0 1 0-3.65 1.89 1.89 0 0 1 .916-1.44 1.98 1.98 0 0 1 1.764-.072 9.4 9.4 0 0 1 2.814 1.77 2.035 2.035 0 0 1 0 3.13 9.6 9.6 0 0 1-2.82 1.771c-.27.111-.558.17-.85.173m.022-5.517a.36.36 0 0 0-.183.045.42.42 0 0 0-.174.321 15.2 15.2 0 0 0 0 3.3.43.43 0 0 0 .163.311.55.55 0 0 0 .46-.022 8 8 0 0 0 2.367-1.487.67.67 0 0 0 .247-.463.66.66 0 0 0-.244-.453 8 8 0 0 0-2.38-1.493.7.7 0 0 0-.256-.059"
    />
  </Svg>
);
export default IconlystRefreshPlayVideoOutline;
