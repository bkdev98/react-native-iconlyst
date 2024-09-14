import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFavoriteDocumentsBroken = ({
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
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.96 13.872-.735-1.478a.25.25 0 0 0-.115-.113.25.25 0 0 0-.338.112l-.734 1.477a.26.26 0 0 1-.19.139l-1.645.239a.3.3 0 0 0-.144.07.25.25 0 0 0 0 .353l1.199 1.152a.25.25 0 0 1 .071.222l-.286 1.627c-.008.053.001.11.027.158a.257.257 0 0 0 .34.104l1.477-.771a.24.24 0 0 1 .234 0l1.465.767q.078.038.164.025a.25.25 0 0 0 .207-.282l-.286-1.627a.24.24 0 0 1 .072-.222l1.192-1.152"
    />
  </Svg>
);
export default IconlystFavoriteDocumentsBroken;
