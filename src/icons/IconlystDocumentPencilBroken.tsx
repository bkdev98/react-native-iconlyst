import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPencilBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.77 10.298v-1.3c0-.528-.204-1.037-.571-1.42L14.407 3.63A2.05 2.05 0 0 0 12.929 3H7.277a3.746 3.746 0 0 0-3.76 3.656v5.254M11.19 20.998H7.186a3.754 3.754 0 0 1-3.67-3.836v-2.627"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.412 5.953a2.56 2.56 0 0 0 2.554 2.56h2.74M12.546 14.109H7.817m2.468-4.129H7.816M20.046 15.625a1.057 1.057 0 0 0-.387-1.444l-.78-.45a1.056 1.056 0 0 0-1.442.387l-2.429 4.206a1.92 1.92 0 0 0-.22 1.335l.134.672a.768.768 0 0 0 1 .578l.65-.22c.44-.15.813-.455 1.046-.859l1.214-2.103"
    />
  </Svg>
);
export default IconlystDocumentPencilBroken;
