import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReverseRightOutline = ({
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
      d="M16.415 4.802a.75.75 0 0 1 1.06 0l3.054 3.053a.75.75 0 0 1 0 1.06l-3.053 3.055a.75.75 0 0 1-1.061-1.061l2.523-2.523-2.523-2.524a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.25 13.53a5.893 5.893 0 0 1 5.893-5.893H20a.75.75 0 0 1 0 1.5H9.143a4.393 4.393 0 0 0 0 8.786h8.437a.75.75 0 0 1 0 1.5H9.143a5.894 5.894 0 0 1-5.893-5.894"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReverseRightOutline;
