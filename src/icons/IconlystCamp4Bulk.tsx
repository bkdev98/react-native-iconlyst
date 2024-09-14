import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCamp4Bulk = ({
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
      fillOpacity={0.4}
      fillRule="evenodd"
      d="M21.75 20.489c0 .42-.34.75-.75.75H3a.749.749 0 1 1 0-1.5h.44l4.51-8.38 3.2-5.93-.84-1.56c-.2-.37-.06-.82.31-1.02.36-.19.82-.06 1.01.31l.37.69.37-.69c.2-.37.65-.5 1.02-.31.36.2.5.66.3 1.02l-.84 1.56 2.45 4.56.75 1.38 4.51 8.37H21c.41 0 .75.34.75.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m16.05 11.369-1.48 1.52c-.14.15-.33.23-.54.23-.2 0-.4-.08-.54-.23L12 11.329l-1.5 1.56a.764.764 0 0 1-1.09 0l-1.46-1.53.74-1.37c.03.01.05.03.08.06l1.19 1.24 1.49-1.56c.29-.3.8-.3 1.09 0l1.5 1.56 1.2-1.25c.02-.02.04-.04.06-.05zM15.6 21.239h-1.64L12 17.609l-1.97 3.63H8.39c.01-.09.04-.18.08-.26l2.87-5.31c.26-.48 1.06-.48 1.32 0l2.86 5.31c.04.09.07.17.08.26"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCamp4Bulk;
