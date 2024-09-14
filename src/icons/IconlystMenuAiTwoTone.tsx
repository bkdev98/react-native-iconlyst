import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMenuAiTwoTone = ({
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
      d="M12.061 20.02H6.108A3.11 3.11 0 0 1 3 16.912V7.088A3.11 3.11 0 0 1 6.108 3.98h5.953a3.11 3.11 0 0 1 3.108 3.108v9.824a3.11 3.11 0 0 1-3.108 3.108"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.082 6.543v10.915M21 8.922v6.155M8.042 12.657l-.09-.242a3.34 3.34 0 0 0-1.969-1.972l-.241-.09.241-.09a3.34 3.34 0 0 0 1.97-1.971l.089-.243.09.243a3.34 3.34 0 0 0 1.968 1.972l.242.09-.242.089a3.34 3.34 0 0 0-1.969 1.972zM11.385 15.95a1.57 1.57 0 0 0-1.043-1.044c.5-.152.89-.544 1.043-1.044.152.5.543.892 1.043 1.044-.5.152-.891.544-1.043 1.045"
    />
  </Svg>
);
export default IconlystMenuAiTwoTone;
