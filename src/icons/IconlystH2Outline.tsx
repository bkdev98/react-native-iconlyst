import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystH2Outline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.5 4.984a.75.75 0 0 1 .75.75v5.603h6.97V5.734a.75.75 0 1 1 1.5 0V18.44a.75.75 0 0 1-1.5 0v-5.603H4.25v5.603a.75.75 0 0 1-1.5 0V5.734a.75.75 0 0 1 .75-.75M19.23 10.719c-.84 0-1.522.682-1.522 1.521a.75.75 0 0 1-1.5 0 3.022 3.022 0 0 1 6.042 0c0 .828-.227 1.424-.552 1.98-.496.85-1.303 1.683-1.96 2.362a40 40 0 0 0-.448.466l-.6.641h2.81a.75.75 0 1 1 0 1.5h-4.54a.75.75 0 0 1-.548-1.262l1.783-1.904q.267-.282.536-.56c.645-.669 1.277-1.323 1.672-2 .223-.381.347-.718.347-1.223 0-.84-.681-1.521-1.52-1.521"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystH2Outline;
