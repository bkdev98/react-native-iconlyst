import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentPencilLight = ({
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
      d="M18.77 10.298v-1.3c0-.528-.204-1.037-.571-1.42L14.407 3.63A2.05 2.05 0 0 0 12.929 3H7.277a3.746 3.746 0 0 0-3.76 3.656v10.508a3.754 3.754 0 0 0 3.67 3.835l4.002.001"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.412 3.063v2.892a2.56 2.56 0 0 0 2.554 2.56h2.74M12.546 14.109H7.817m2.468-4.129H7.816M17.437 14.118a1.056 1.056 0 0 1 1.443-.387l.779.45c.505.292.678.938.387 1.444l-2.428 4.205a1.92 1.92 0 0 1-1.046.859l-.65.22a.768.768 0 0 1-1-.578l-.134-.672a1.92 1.92 0 0 1 .22-1.335z"
    />
  </Svg>
);
export default IconlystDocumentPencilLight;