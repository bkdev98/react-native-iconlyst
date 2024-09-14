import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTicketStarBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M17.856 3c2.284 0 4.143 1.842 4.143 4.105L22 9.782a.74.74 0 0 1-.219.526.75.75 0 0 1-.531.218c-.821 0-1.489.661-1.489 1.475 0 .813.668 1.475 1.489 1.475.414 0 .75.333.75.744v2.676C22 19.159 20.142 21 17.858 21H6.143C3.859 21 2 19.159 2 16.896V14.22c0-.41.336-.744.75-.744.822 0 1.49-.662 1.49-1.475 0-.793-.641-1.39-1.49-1.39a.75.75 0 0 1-.53-.217.74.74 0 0 1-.22-.525l.002-2.764C2.002 4.842 3.86 3 6.144 3Zm-5.854 5.153a.74.74 0 0 0-.665.409l-.729 1.463-1.626.235a.74.74 0 0 0-.6.497.72.72 0 0 0 .187.754l1.179 1.137-.278 1.608a.73.73 0 0 0 .295.719.741.741 0 0 0 .777.054L12 14.27l1.455.757a.73.73 0 0 0 .78-.053.72.72 0 0 0 .296-.718l-.279-1.608 1.179-1.137a.73.73 0 0 0-.409-1.25l-1.629-.236-.729-1.462a.74.74 0 0 0-.662-.41"
    />
  </Svg>
);
export default IconlystTicketStarBold;
