import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCloseSquareBulksharp = ({
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
      d="M12.25 2.785c-5.376 0-9.75 4.374-9.75 9.75s4.374 9.75 9.75 9.75S22 17.91 22 12.535s-4.374-9.75-9.75-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="m14.65 15.985 1.06-1.061-2.4-2.398 2.4-2.395-1.06-1.062-2.4 2.397-2.4-2.4-1.061 1.062 2.399 2.398-2.4 2.395 1.06 1.06 2.4-2.395z"
    />
  </Svg>
);
export default IconlystCloseSquareBulksharp;