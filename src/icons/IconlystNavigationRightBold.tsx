import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationRightBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M12.884 14.082a2.79 2.79 0 0 0-3.7 0L4.95 17.844c-.749.666-.945 1.676-.5 2.575.443.897 1.368 1.352 2.35 1.164l3.916-.772.538-.01 4.013.782q.222.042.44.043c.811-.001 1.533-.445 1.91-1.207a2.115 2.115 0 0 0-.502-2.575zM19.785 5.68a.75.75 0 0 0-.223-.534q-.002-.002-.004-.005l-2.614-2.553a.75.75 0 1 0-1.048 1.072l1.299 1.27h-1.59c-1.84 0-5.32 1.111-5.32 5.32a.75.75 0 0 0 1.5 0c0-3.687 3.432-3.818 3.82-3.82h1.586l-1.295 1.265a.75.75 0 1 0 1.048 1.072l2.61-2.55a.75.75 0 0 0 .23-.538"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNavigationRightBold;
