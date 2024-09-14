import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadPlayVideoOutline = ({
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
      d="M16.155 7.64a.75.75 0 1 1-.044-1.5l2.64-.156-.156-2.658a.75.75 0 0 1 1.42-.376.7.7 0 0 1 .073.283l.2 3.408a.75.75 0 0 1-.7.793l-3.389.2z"
    />
    <Path
      fill={props.color}
      d="M12.09 21.748a9.747 9.747 0 1 1 7.877-15.483.75.75 0 1 1-1.212.884 8.248 8.248 0 1 0 1.575 4.857.75.75 0 1 1 1.5.002 9.753 9.753 0 0 1-9.742 9.736z"
    />
    <Path
      fill={props.color}
      d="M11.245 15.978a2 2 0 0 1-1.018-.273 2.07 2.07 0 0 1-.982-1.582 20 20 0 0 1 0-4.233 2.07 2.07 0 0 1 1.009-1.593 2.16 2.16 0 0 1 1.933-.072 10.8 10.8 0 0 1 3.224 2.044 2.36 2.36 0 0 1 .81 1.725 2.38 2.38 0 0 1-.809 1.745 11 11 0 0 1-3.231 2.045c-.297.124-.614.19-.936.194m.025-6.446a.5.5 0 0 0-.265.066.62.62 0 0 0-.266.471 18.4 18.4 0 0 0 0 3.887.62.62 0 0 0 .25.458.72.72 0 0 0 .63-.017 9.5 9.5 0 0 0 2.777-1.76.9.9 0 0 0 .327-.637.9.9 0 0 0-.325-.627 9.4 9.4 0 0 0-2.788-1.765.9.9 0 0 0-.342-.076z"
    />
  </Svg>
);
export default IconlystReloadPlayVideoOutline;
