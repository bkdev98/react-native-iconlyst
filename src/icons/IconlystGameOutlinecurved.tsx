import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGameOutlinecurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      d="M8.24 16.875a.75.75 0 0 0 1.5 0v-1.038h1.075a.75.75 0 0 0 0-1.5H9.74V13.3a.75.75 0 0 0-1.5 0v1.037H7.167a.75.75 0 0 0 0 1.5H8.24zM15.213 14.159h-.102a.75.75 0 0 1 0-1.5h.102a.75.75 0 0 1 0 1.5M16.84 17.57h.104a.75.75 0 0 0 0-1.5h-.103a.75.75 0 0 0 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.834 6.969C4.357 7 1.702 9.149 1.702 15.133c0 6.027 2.694 8.164 10.298 8.164 7.603 0 10.298-2.137 10.298-8.164 0-5.662-2.377-7.89-8.964-8.14V6.7c-.021-1.51-1.284-2.71-2.77-2.718H9.549L9.49 3.97c-.106-.025-.24-.056-.328-.142A.54.54 0 0 1 9 3.447a.75.75 0 0 0-.75-.744h-.006a.75.75 0 0 0-.744.756c.004.546.222 1.057.612 1.44.39.381.882.568 1.444.584h1.014a1.244 1.244 0 0 1 1.264 1.228zm-8.632 8.164c0-5.107 2.055-6.664 8.798-6.664 6.742 0 8.798 1.557 8.798 6.664S18.742 21.797 12 21.797c-6.743 0-8.798-1.557-8.798-6.664"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGameOutlinecurved;
