import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoNotTouchBold = ({
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
      d="m20.76 20.277-2.25-2.373c.98-1.874 1.356-4.401.602-6.437-.994-2.684-4.555-2.556-7.013-2.791l-.07-4.545a1.757 1.757 0 0 0-3.514.026v3.208L4.376 3.002A.783.783 0 1 0 3.238 4.08l16.385 17.275a.78.78 0 0 0 1.109.03.783.783 0 0 0 .029-1.108M5.3 11.397c-.935.359-1.436 1.375-1.095 2.317.636 1.756 1.646 3.717 2.945 5.332 1.545 1.922 5.385 2.29 8.17 1.394.347-.112.436-.542.185-.806l-7.488-7.86c-.911-.834-2.223-.548-2.717-.377"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDoNotTouchBold;
