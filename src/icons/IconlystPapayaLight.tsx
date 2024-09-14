import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPapayaLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.251 7.936C15.45 4.627 12.857 4.124 12 4.732c-.857-.608-3.45-.105-3.251 3.204.106 1.766-.273 1.906-1.57 4.08C5.344 15.094 6.215 21.056 12 21.5c5.786-.443 6.657-6.405 4.82-9.485-1.296-2.173-1.675-2.313-1.569-4.08"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.433 12.94c1.878 4.63.354 7.267-1.457 8.212-2.003-.799-3.336-3.582-1.458-8.212M12.738 2.5c-.246.219-.738.96-.738 2.173"
    />
  </Svg>
);
export default IconlystPapayaLight;
