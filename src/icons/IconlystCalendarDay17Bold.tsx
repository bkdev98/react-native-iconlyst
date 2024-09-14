import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDay17Bold = ({
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
      d="m17.03 11.263-1.662 5.355a.75.75 0 1 1-1.432-.445l1.36-4.383h-2.358a.75.75 0 0 1 0-1.5h3.377a.75.75 0 0 1 .716.973m-6.263 5.133a.75.75 0 0 1-1.5 0V11.04a.75.75 0 0 1 1.5 0zm9.527-11.069c-.722-.726-1.754-1.134-2.981-1.237v-.965a.75.75 0 0 0-1.5 0v3.549c-.066.018-.13.04-.201.04a.75.75 0 0 1-.75-.75V4.246a.2.2 0 0 0-.2-.2H10.04v-.921a.75.75 0 0 0-1.5 0v3.549c-.066.018-.13.04-.201.04a.75.75 0 0 1-.75-.75V4.5a.193.193 0 0 0-.247-.188c-1.91.575-3.016 2.125-3.016 4.412v8.146c0 2.978 1.792 4.755 4.794 4.755h7.612c3.002 0 4.794-1.752 4.794-4.687V8.726c.004-1.412-.422-2.587-1.232-3.399"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarDay17Bold;
