import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRubleBold = ({
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
      d="M13.218 11.593H9.923v-4.53h3.294a2.267 2.267 0 0 1 2.26 2.27 2.263 2.263 0 0 1-2.26 2.26m0-6.53H8.923a1 1 0 0 0-1 1v5.53h-.4a1 1 0 1 0 0 2h.4v.92h-.398a1 1 0 1 0 0 2h.398v1.55a1 1 0 0 0 2 0v-1.55h1.364a1 1 0 1 0 0-2H9.923v-.92h3.294a4.265 4.265 0 0 0 0-8.53"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRubleBold;
