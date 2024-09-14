import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUpdateSquareBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m18.229 10.79-1.073 1.83a.76.76 0 0 1-.647.371.75.75 0 0 1-.381-.104l-1.817-1.07a.752.752 0 0 1 .762-1.293l.26.153C14.735 9.426 13.461 8.55 12 8.55a3.7 3.7 0 0 0-3.047 1.597.749.749 0 1 1-1.233-.854A5.2 5.2 0 0 1 12 7.05c2.146 0 4.005 1.341 4.792 3.226l.144-.245a.75.75 0 1 1 1.293.759m-1.95 4.417a5.2 5.2 0 0 1-4.28 2.244c-2.149 0-4.008-1.34-4.794-3.223l-.142.242a.75.75 0 0 1-1.026.267.75.75 0 0 1-.267-1.026l1.073-1.83a.75.75 0 0 1 1.028-.267l1.817 1.07a.751.751 0 0 1-.762 1.293l-.266-.157c.596 1.253 1.873 2.131 3.339 2.131a3.7 3.7 0 0 0 3.045-1.597.75.75 0 1 1 1.235.853M15.974 2.75H8.027C4.721 2.75 2.5 4.873 2.5 8.031v8.439c0 3.158 2.221 5.28 5.527 5.28h7.947c3.306 0 5.526-2.122 5.526-5.28V8.031c0-3.158-2.22-5.281-5.526-5.281"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUpdateSquareBold;
