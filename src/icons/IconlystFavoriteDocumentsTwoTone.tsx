import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFavoriteDocumentsTwoTone = ({
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
      d="M20.758 12.528v5.156a3.314 3.314 0 0 1-3.313 3.314H6.97a3.314 3.314 0 0 1-3.314-3.314v-5.156a3.313 3.313 0 0 1 3.314-3.313h10.474a3.313 3.313 0 0 1 3.313 3.313"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.39 6.112h11.636M8.927 3h6.562"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.433 12.394.735 1.477a.25.25 0 0 0 .19.138l1.644.239a.26.26 0 0 1 .168.096c.077.1.065.242-.027.328l-1.192 1.152a.24.24 0 0 0-.072.222l.286 1.627a.25.25 0 0 1-.207.282.27.27 0 0 1-.164-.025l-1.465-.767a.24.24 0 0 0-.234 0l-1.476.771a.257.257 0 0 1-.341-.104.25.25 0 0 1-.026-.158l.285-1.627a.25.25 0 0 0-.071-.222l-1.199-1.152a.25.25 0 0 1 0-.353q.062-.055.144-.07l1.645-.24a.26.26 0 0 0 .19-.138l.734-1.476a.25.25 0 0 1 .338-.113q.076.037.115.113"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystFavoriteDocumentsTwoTone;
