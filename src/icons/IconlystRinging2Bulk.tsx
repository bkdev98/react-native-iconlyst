import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRinging2Bulk = ({
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
      d="M9.729 17.98h4.537v.003l1.5-.002h1.563c.936 0 1.794-.473 2.296-1.263.503-.791.565-1.77.165-2.62l-.453-.963a4.7 4.7 0 0 1-.443-1.984l-.001-1.283A6.9 6.9 0 0 0 12 2.975a6.9 6.9 0 0 0-6.892 6.893l-.001 1.283c0 .692-.15 1.359-.443 1.983l-.455.965a2.71 2.71 0 0 0 .164 2.617 2.71 2.71 0 0 0 2.299 1.265h3.057"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.749 6.09a6.8 6.8 0 0 1 1.999-2.499.75.75 0 1 0-.924-1.182 8.3 8.3 0 0 0-2.438 3.054.75.75 0 0 0 1.363.627M20.613 5.463a8.3 8.3 0 0 0-2.438-3.053.748.748 0 1 0-.923 1.181 6.84 6.84 0 0 1 2 2.5.749.749 0 1 0 1.361-.628"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.997 20.25a2.27 2.27 0 0 0 2.269-2.268h1.5a3.77 3.77 0 0 1-3.77 3.768 3.77 3.77 0 0 1-3.766-3.768h1.5a2.27 2.27 0 0 0 2.267 2.268"
    />
  </Svg>
);
export default IconlystRinging2Bulk;
