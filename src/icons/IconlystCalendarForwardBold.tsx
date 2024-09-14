import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarForwardBold = ({
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
      d="M15.663 11.294H8.297a.75.75 0 0 1 0-1.5h7.365a.75.75 0 0 1 0 1.5m.372 5.454-2.063 1.926a.75.75 0 0 1-1.06-.037.75.75 0 0 1 .035-1.061l.672-.626H8.692a.75.75 0 0 1 0-1.5h4.928l-.671-.626a.75.75 0 1 1 1.021-1.097l2.065 1.923a.75.75 0 0 1 0 1.098m3.418-11.421c-.723-.725-1.755-1.134-2.982-1.236v-.966a.75.75 0 0 0-1.5 0v3.549c-.066.019-.13.041-.201.041a.75.75 0 0 1-.75-.75V4.247a.2.2 0 0 0-.2-.2H9.197v-.922a.75.75 0 0 0-1.5 0v3.549c-.064.019-.13.041-.2.041a.75.75 0 0 1-.75-.75V4.5a.193.193 0 0 0-.248-.188c-1.908.576-3.014 2.126-3.014 4.413v8.145c0 2.978 1.792 4.755 4.792 4.755h7.614c3 0 4.792-1.752 4.792-4.686V8.726c.005-1.412-.421-2.587-1.23-3.399"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarForwardBold;
