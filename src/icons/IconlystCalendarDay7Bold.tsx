import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDay7Bold = ({
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
      d="m15.33 11.263-1.663 5.355a.75.75 0 1 1-1.432-.445l1.361-4.383h-2.359a.75.75 0 0 1 0-1.5h3.377a.75.75 0 0 1 .716.973m4.964-5.936c-.723-.726-1.754-1.134-2.982-1.237v-.965a.75.75 0 0 0-1.5 0v3.549c-.065.018-.129.04-.2.04a.75.75 0 0 1-.75-.75V4.246a.2.2 0 0 0-.2-.2h-4.623v-.921a.75.75 0 0 0-1.5 0v3.549c-.065.018-.129.04-.2.04a.75.75 0 0 1-.75-.75V4.5a.193.193 0 0 0-.248-.188c-1.908.575-3.015 2.125-3.015 4.412v8.146c0 2.978 1.792 4.755 4.793 4.755h7.613c3.002 0 4.793-1.752 4.793-4.687V8.726c.004-1.412-.42-2.587-1.23-3.399"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarDay7Bold;
