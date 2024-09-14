import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShare3Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.07 4.023a1.845 1.845 0 1 0 0 3.69 1.845 1.845 0 0 0 0-3.69M8.723 5.868a3.345 3.345 0 1 1 6.69 0 3.345 3.345 0 0 1-6.69 0m-3.13 9.22a1.845 1.845 0 1 0 0 3.69 1.845 1.845 0 0 0 0-3.69M2.25 16.933a3.345 3.345 0 1 1 6.69 0 3.345 3.345 0 0 1-6.69 0m16.156-1.845a1.845 1.845 0 1 0 0 3.69 1.845 1.845 0 0 0 0-3.69m-3.345 1.845a3.345 3.345 0 1 1 6.69 0 3.345 3.345 0 0 1-6.69 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.621 18.496a.75.75 0 0 1 1.057-.091 6.7 6.7 0 0 0 5.812 1.399.75.75 0 1 1 .338 1.461 8.2 8.2 0 0 1-7.115-1.713.75.75 0 0 1-.092-1.056M16.339 7.197a.75.75 0 0 1 1.058-.065 8.2 8.2 0 0 1 2.64 7.499.75.75 0 1 1-1.479-.252 6.7 6.7 0 0 0-2.154-6.124.75.75 0 0 1-.066-1.058M10.225 6.037a.75.75 0 0 1-.46.956 6.7 6.7 0 0 0-4.226 4.513.75.75 0 0 1-1.445-.402 8.2 8.2 0 0 1 5.174-5.526.75.75 0 0 1 .957.459"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystShare3Outline;
