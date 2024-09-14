import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSquareBoldsharp = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.711 14.924-1.061 1.06-2.401-2.398-2.4 2.396-1.06-1.061 2.399-2.395-2.399-2.398L9.85 9.067l2.4 2.399 2.401-2.397 1.06 1.062-2.4 2.395zM12.25 2.784c-5.376 0-9.75 4.375-9.75 9.75 0 5.377 4.374 9.75 9.75 9.75S22 17.912 22 12.535c0-5.375-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCloseSquareBoldsharp;
