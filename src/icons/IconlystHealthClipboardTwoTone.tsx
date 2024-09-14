import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHealthClipboardTwoTone = ({
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
      d="M10.363 4.533A2.77 2.77 0 0 1 12.844 3h.13c1.051 0 2.012.594 2.482 1.533.075.151.23.247.398.247h.17a1.335 1.335 0 1 1 0 2.67h-6.23a1.335 1.335 0 0 1 0-2.67h.171a.45.45 0 0 0 .398-.247"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.359 6.07c1.663.356 2.67 1.754 2.67 3.622v7.599c0 2.171-1.363 3.71-3.542 3.71H9.324c-2.18 0-3.533-1.539-3.533-3.71v-7.6c0-1.867 1.006-3.265 2.67-3.62M9.795 17.21h6.229"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.91 10.73v3.204m-1.601-1.604h3.204"
    />
  </Svg>
);
export default IconlystHealthClipboardTwoTone;
