import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M16.191 2C19.28 2 21 3.78 21 6.83v10.33c0 3.1-1.72 4.84-4.809 4.84H7.81C4.77 22 3 20.26 3 17.16V6.83C3 3.78 4.77 2 7.81 2ZM8.08 15.74a.795.795 0 0 0-.75 1.21c.16.25.45.4.75.36h7.84c.399-.04.7-.381.7-.78 0-.41-.301-.75-.7-.79Zm7.84-4.561H8.08a.781.781 0 0 0 0 1.561h7.84a.781.781 0 0 0 0-1.561M11.069 6.65H8.08v.01a.78.78 0 0 0 0 1.56h2.989c.431 0 .781-.35.781-.791a.78.78 0 0 0-.781-.779"
    />
  </Svg>
);
export default IconlystDocumentBold;
