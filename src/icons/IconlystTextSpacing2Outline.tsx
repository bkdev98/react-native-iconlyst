import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextSpacing2Outline = ({
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
      d="M8.77 7.4v11.483a.75.75 0 0 0 1.5 0V7.399h5.386a.75.75 0 1 0 0-1.5H3.5a.75.75 0 0 0 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.484 12.005a.75.75 0 0 1 0 1.06l-.59.59h4.795l-.59-.59a.75.75 0 0 1 1.06-1.06l1.87 1.87a.75.75 0 0 1 0 1.06l-1.87 1.87a.75.75 0 0 1-1.06-1.06l.59-.59h-4.794l.59.59a.75.75 0 1 1-1.061 1.06l-1.87-1.87a.75.75 0 0 1 0-1.06l1.87-1.87a.75.75 0 0 1 1.06 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTextSpacing2Outline;
