import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDay7Bulk = ({
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
      d="M16.812 4.09c1.228.103 2.26.511 2.982 1.237.81.812 1.235 1.987 1.231 3.399v8.212c0 2.935-1.79 4.687-4.793 4.687H8.62c-3 0-4.793-1.777-4.793-4.755V8.724c0-2.287 1.106-3.837 3.015-4.412a.19.19 0 0 1 .227.1V6.11a.75.75 0 1 0 1.5 0V3.148a.75.75 0 0 0-.278-.582.75.75 0 0 1 1.25.56v.92h4.621a.2.2 0 0 1 .177.107V6.11a.75.75 0 0 0 1.5 0V3.148a.75.75 0 0 0-.276-.581.75.75 0 0 1 1.25.558z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.54 3.148a.75.75 0 1 0-1.5 0V6.11a.75.75 0 1 0 1.5 0zM16.811 3.148a.75.75 0 0 0-1.5 0V6.11a.75.75 0 0 0 1.5 0z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m14.83 11.262-1.663 5.355a.75.75 0 1 1-1.432-.445l1.361-4.383h-2.359a.75.75 0 0 1 0-1.5h3.377a.75.75 0 0 1 .716.973"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarDay7Bulk;
