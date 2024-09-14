import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRupeeBold = ({
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
      d="M16.002 8.433h-2.163a4.5 4.5 0 0 0-.596-1.36h2.758a1 1 0 0 0 0-2H9.599c-.033-.002-.064-.01-.097-.01H7.999a1 1 0 0 0-1 1v.01a1 1 0 0 0 1 1h1.599c.926.035 1.72.577 2.12 1.36h-3.72a1 1 0 1 0 0 2h3.837a2.495 2.495 0 0 1-2.333 1.63H8a1.002 1.002 0 0 0-.707 1.707l5.001 5a.997.997 0 0 0 1.415 0 1 1 0 0 0 0-1.415l-3.373-3.37a4.51 4.51 0 0 0 3.573-3.552h2.092a1 1 0 1 0 0-2"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRupeeBold;
