import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCalendarDay31Bulk = ({
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
      d="M16.97 4.09c1.229.103 2.26.511 2.983 1.237.81.812 1.235 1.987 1.23 3.399v8.212c0 2.935-1.79 4.687-4.792 4.687H8.778c-3.001 0-4.793-1.777-4.793-4.755V8.724C3.985 6.437 5.09 4.887 7 4.312a.19.19 0 0 1 .226.1V6.11a.75.75 0 0 0 1.5 0V3.148a.75.75 0 0 0-.278-.582.75.75 0 0 1 1.25.56v.92h4.622a.2.2 0 0 1 .177.107V6.11a.75.75 0 0 0 1.5 0V3.148a.75.75 0 0 0-.277-.581.75.75 0 0 1 1.25.558z"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M9.699 3.148a.75.75 0 1 0-1.5 0V6.11a.75.75 0 0 0 1.5 0zM16.97 3.148a.75.75 0 0 0-1.5 0V6.11a.75.75 0 0 0 1.5 0z"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.773 16.738a.75.75 0 0 1-1.5 0v-4.35l-.02.014a.75.75 0 0 1-.9-1.199l1.22-.915a.75.75 0 0 1 .785-.071.75.75 0 0 1 .415.67zm-6.363.752a2.55 2.55 0 0 1-1.808-.748.75.75 0 1 1 1.059-1.063 1.055 1.055 0 1 0 .749-1.798.75.75 0 0 1-.584-1.221l.824-1.023H9.07a.75.75 0 0 1 0-1.5h3.148a.75.75 0 0 1 .584 1.22l-1.105 1.372a2.556 2.556 0 0 1-1.287 4.76"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCalendarDay31Bulk;
