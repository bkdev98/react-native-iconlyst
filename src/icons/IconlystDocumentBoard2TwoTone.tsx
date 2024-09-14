import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBoard2TwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.475 21h8.049a3.525 3.525 0 0 0 3.524-3.524V6.524A3.525 3.525 0 0 0 16.524 3H8.475a3.524 3.524 0 0 0-3.524 3.524v10.952A3.524 3.524 0 0 0 8.475 21"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.951 15.602h15.097M9.583 7.367h3.1m-3.1 3.784h5.833"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDocumentBoard2TwoTone;
