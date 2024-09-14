import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarForwardBulk = ({
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
      d="M19.952 5.327c-.723-.725-1.755-1.134-2.982-1.236v-.966a.75.75 0 0 0-1.5 0v3.549c-.065.019-.13.041-.2.041a.75.75 0 0 1-.75-.75V4.247a.2.2 0 0 0-.2-.2H9.696v-.922a.75.75 0 0 0-1.5 0v3.549c-.065.019-.13.041-.2.041a.75.75 0 0 1-.75-.75V4.5a.193.193 0 0 0-.248-.188c-1.908.576-3.015 2.126-3.015 4.413v8.145c0 2.978 1.792 4.755 4.793 4.755h7.613c3.001 0 4.793-1.752 4.793-4.686V8.726c.004-1.412-.422-2.587-1.23-3.399"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.163 11.293H8.798a.75.75 0 0 1 0-1.5h7.365a.75.75 0 0 1 0 1.5m.373 5.454-2.064 1.926a.75.75 0 0 1-1.06-.037.75.75 0 0 1 .036-1.061l.67-.626H9.193a.75.75 0 0 1 0-1.5h4.928l-.671-.626a.75.75 0 1 1 1.022-1.097l2.064 1.923a.75.75 0 0 1 0 1.098"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarForwardBulk;
