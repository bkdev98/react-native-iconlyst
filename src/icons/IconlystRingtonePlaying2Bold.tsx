import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRingtonePlaying2Bold = ({
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
      d="M11.706 20.042a2.426 2.426 0 0 1-1.79-2.518l4.597 1.232a2.42 2.42 0 0 1-2.807 1.286m8.524-8.566c1.03-3.85-1.263-7.821-5.111-8.852h-.001a7.2 7.2 0 0 0-5.484.722 7.18 7.18 0 0 0-3.367 4.388L5.915 9.04a4.9 4.9 0 0 1-.995 1.903l-.724.857a2.82 2.82 0 0 0-.541 2.68 2.82 2.82 0 0 0 1.975 1.894l2.838.76c-.283 1.94.909 3.836 2.85 4.356q.51.134 1.014.134a3.93 3.93 0 0 0 3.638-2.48l.49.133a2.825 2.825 0 0 0 2.658-.653 2.83 2.83 0 0 0 .872-2.591l-.2-1.105a5 5 0 0 1 .09-2.148z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRingtonePlaying2Bold;
