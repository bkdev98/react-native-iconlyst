import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBulkcurved = ({
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
      d="M12.25 2.25c-6.565 0-8.891 2.552-8.891 9.751s2.326 9.75 8.89 9.75c6.565 0 8.892-2.552 8.892-9.75s-2.327-9.75-8.891-9.75"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M8.625 12.688h7.22a.75.75 0 0 0 0-1.5h-7.22a.75.75 0 0 0 0 1.5M8.625 16.447h7.22a.75.75 0 0 0 0-1.5h-7.22a.75.75 0 0 0 0 1.5M11.38 7.427H8.625a.75.75 0 0 0 0 1.5h2.755a.75.75 0 0 0 0-1.5"
    />
  </Svg>
);
export default IconlystDocumentBulkcurved;
