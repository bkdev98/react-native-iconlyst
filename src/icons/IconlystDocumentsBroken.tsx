import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDocumentsBroken = ({
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
      d="M12 20.998h5.237a3.314 3.314 0 0 0 3.313-3.314v-5.156a3.313 3.313 0 0 0-3.313-3.313H6.763a3.313 3.313 0 0 0-3.314 3.313v5.156a3.314 3.314 0 0 0 3.314 3.314h.791M6.182 6.112h11.636M8.719 3h6.562"
    />
  </Svg>
);
export default IconlystDocumentsBroken;
