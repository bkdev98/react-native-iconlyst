import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFood2Outline = ({
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
      d="M5.595 15.69c0-.42.335-.75.75-.75h.014a5.64 5.64 0 0 1 3.928-5.396V8.78c0-.95.77-1.72 1.714-1.72.946 0 1.713.77 1.713 1.72v.765a5.64 5.64 0 0 1 3.928 5.395h.014c.415 0 .75.33.75.75 0 .41-.335.75-.75.75H6.346a.75.75 0 0 1-.75-.75m2.264-.75h8.284a4.142 4.142 0 1 0-8.284 0m4.355-5.656V8.78c0-.12-.095-.22-.213-.22s-.214.1-.214.22v.504a6 6 0 0 1 .427 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.26 19.85c-.985 1.06-2.387 1.65-4.042 1.65H7.783c-1.659 0-3.062-.59-4.046-1.65-.978-1.05-1.487-2.5-1.487-4.13V7.78c0-1.63.509-3.08 1.487-4.13C4.72 2.59 6.124 2 7.784 2h8.434c1.659 0 3.062.59 4.045 1.65.98 1.05 1.487 2.5 1.487 4.13v7.94c0 1.63-.511 3.08-1.49 4.13m-1.097-1.02c.677-.73 1.087-1.79 1.087-3.11V7.78c0-1.32-.41-2.38-1.085-3.11-.67-.72-1.658-1.17-2.947-1.17H7.784c-1.289 0-2.278.45-2.949 1.17-.676.73-1.085 1.79-1.085 3.11v7.94c0 1.32.41 2.38 1.085 3.11.67.72 1.66 1.17 2.948 1.17h8.435c1.284 0 2.273-.45 2.945-1.17"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFood2Outline;
