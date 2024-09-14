import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGlovesOutline = ({
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
      d="M13.595 19.425a1 1 0 0 1-.065.068l-1.301 1.367c-.78.82-2.074.86-2.894.08l-6.33-6.03a2.043 2.043 0 0 1-.072-2.89l1.335-1.4.139-.14.003-.01-.315-5.25a3.003 3.003 0 0 1 2.917-3.18 3 3 0 0 1 3.03 2.506l.528-.556a6.42 6.42 0 0 1 9.068-.22 6.415 6.415 0 0 1 .227 9.07zM9.053 7.08a.745.745 0 0 1-.471-.7l.001-1.34a1.498 1.498 0 1 0-2.992.09l.314 5.26c.013.223-.025.443-.108.646l7.197 6.847 5.785-6.083a4.912 4.912 0 1 0-7.122-6.77L9.874 6.9a.76.76 0 0 1-.821.18m-4.216 5.116-.817.864a.544.544 0 0 0 .019.77l6.33 6.02c.22.21.565.2.773-.02l.816-.859z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGlovesOutline;
