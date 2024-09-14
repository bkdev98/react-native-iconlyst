import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageEditLight = ({
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
      d="M12.726 3h-4.9c-2.936 0-4.78 2.08-4.78 5.026v7.947c0 2.946 1.835 5.027 4.78 5.027h8.434c2.949 0 4.78-2.081 4.78-5.027v-4.379M6.333 6.804h-.056m2.499 0H8.72M9.676 9.694h-6.63"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m13.953 12.266.97-.162a2.32 2.32 0 0 0 1.349-.744L20.45 6.8a1.33 1.33 0 0 0-.073-1.881l-.89-.825a1.33 1.33 0 0 0-1.883.072L13.38 8.779a2.32 2.32 0 0 0-.578 1.299l-.108 1a1.087 1.087 0 0 0 1.26 1.188"
    />
  </Svg>
);
export default IconlystWebPageEditLight;
