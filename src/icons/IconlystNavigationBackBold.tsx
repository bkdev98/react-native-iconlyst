import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNavigationBackBold = ({
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
      d="m19.926 17.8-4.296-3.817a2.82 2.82 0 0 0-3.748 0L7.585 17.8c-.757.675-.956 1.697-.507 2.605.382.77 1.11 1.219 1.93 1.219q.221.001.447-.043l3.979-.783.548-.01 4.072.793c.996.192 1.929-.268 2.379-1.177a2.14 2.14 0 0 0-.507-2.604M8.886 11.325a.75.75 0 0 0-1.073-1.049l-.848.869V6.894a3.023 3.023 0 0 1 3.02-3.019 3.023 3.023 0 0 1 3.02 3.019v3.191a.75.75 0 0 0 1.5 0V6.894a4.525 4.525 0 0 0-4.52-4.519 4.524 4.524 0 0 0-4.52 4.519v4.251l-.85-.869a.75.75 0 0 0-1.06-.013.75.75 0 0 0-.012 1.062l2.135 2.187.006.003c.026.027.063.041.093.064a.74.74 0 0 0 .438.158.74.74 0 0 0 .437-.158c.03-.023.067-.037.094-.064l.005-.003z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNavigationBackBold;
