import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWhatsappLight = ({
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
      d="M7.95 20.037a1.02 1.02 0 0 0-.698-.092c-.81.191-2.118.517-3.07.756a.744.744 0 0 1-.908-.888c.237-1.025.565-2.452.72-3.165.049-.222.019-.45-.077-.656C3.347 14.772 3 13.42 3 12c0-5.512 5.021-9.907 10.715-8.839 3.578.671 6.453 3.547 7.124 7.124C21.907 15.979 17.512 21 11.999 21c-1.409 0-2.818-.34-4.05-.963"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.6 8.46c-1.386 1.394-.335 3.608 1.514 5.456s4.027 2.864 5.42 1.478l.128-.128a1.267 1.267 0 0 0-.17-1.937l-.66-.46a1.27 1.27 0 0 0-1.626.133l-.236.234c-1.013-.603-1.526-1.183-2.21-2.21l.233-.236a1.276 1.276 0 0 0 .135-1.627q-.245-.347-.463-.66a1.268 1.268 0 0 0-1.936-.17z"
    />
  </Svg>
);
export default IconlystWhatsappLight;
