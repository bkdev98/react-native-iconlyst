import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessageChatLikeHeart3Bulk = ({
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
      d="M17.538 2.861H7.416a4.446 4.446 0 0 0-4.44 4.441v6.91a4.445 4.445 0 0 0 4.44 4.44h1.068c.434 0 .863.177 1.172.482l1.422 1.431.003.003c.385.38.89.57 1.395.57.507 0 1.014-.192 1.4-.573l1.419-1.427a1.7 1.7 0 0 1 1.176-.486h1.067a4.444 4.444 0 0 0 4.439-4.44v-6.91a4.445 4.445 0 0 0-4.44-4.44"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.237 9.237A2.44 2.44 0 0 0 14.7 7.8a2.56 2.56 0 0 0-1.21-.086c-.372.062-.709.284-.991.49-.273-.197-.618-.423-.991-.486a2.6 2.6 0 0 0-1.21.082c-1.551.502-2.03 2.2-1.595 3.55.675 2.167 3.584 3.545 3.708 3.603a.21.21 0 0 0 .176 0c.121-.057 2.988-1.41 3.704-3.6v-.002c.23-.713.21-1.465-.054-2.115"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessageChatLikeHeart3Bulk;
