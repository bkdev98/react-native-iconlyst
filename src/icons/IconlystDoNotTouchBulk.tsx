import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoNotTouchBulk = ({
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
      d="m21.26 20.275-2.25-2.372c.98-1.875 1.356-4.402.602-6.438-.994-2.684-4.555-2.556-7.013-2.791l-.07-4.545a1.757 1.757 0 0 0-3.514.026v3.208L4.876 3a.783.783 0 1 0-1.138 1.078l16.385 17.275a.78.78 0 0 0 1.108.03.784.784 0 0 0 .03-1.108"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M5.8 11.396c-.935.359-1.436 1.375-1.095 2.317.636 1.757 1.646 3.717 2.945 5.332 1.545 1.922 5.385 2.29 8.17 1.394.347-.111.436-.542.185-.805l-7.488-7.86c-.911-.835-2.223-.55-2.717-.378"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDoNotTouchBulk;
