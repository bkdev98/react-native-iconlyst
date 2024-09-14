import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchCircleTitleOutline = ({
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
      d="M12.342 3.75A8.318 8.318 0 0 0 10.9 20.261a.75.75 0 0 1-.258 1.478c-4.613-.806-8.118-4.829-8.118-9.671 0-5.422 4.396-9.818 9.818-9.818 4.745 0 8.702 3.366 9.618 7.84a.75.75 0 0 1-1.47.3 8.32 8.32 0 0 0-8.148-6.64m-4.61 5.66a.75.75 0 0 1 .75-.75h2.523a.75.75 0 0 1 0 1.5H8.482a.75.75 0 0 1-.75-.75m9.41 5.18a2.299 2.299 0 1 0 1.536 4.01l.007-.008.05-.045a2.299 2.299 0 0 0-1.592-3.956m3.1 4.496a3.799 3.799 0 1 0-1.093 1.028l1.208 1.207a.75.75 0 0 0 1.06-1.061z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSearchCircleTitleOutline;
