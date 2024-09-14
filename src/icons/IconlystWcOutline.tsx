import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWcOutline = ({
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
      d="M2.798 4.861c.86-.923 2.084-1.436 3.519-1.436h11.866c1.439 0 2.662.513 3.523 1.437C22.56 5.779 23 7.042 23 8.448v7.104c0 1.407-.44 2.67-1.295 3.587-.86.924-2.084 1.437-3.523 1.437H6.317c-1.439 0-2.662-.513-3.523-1.437-.854-.918-1.294-2.18-1.294-3.587V8.448c0-1.407.442-2.67 1.298-3.587m1.097 1.023C3.34 6.478 3 7.352 3 8.448v7.104c0 1.097.34 1.972.892 2.565.547.587 1.357.959 2.425.959h11.865c1.069 0 1.879-.372 2.426-.96.552-.592.892-1.467.892-2.564V8.448c0-1.097-.34-1.971-.892-2.564-.547-.587-1.357-.96-2.425-.96H6.317c-1.064 0-1.874.372-2.422.96"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.419 9.922a2.94 2.94 0 0 1 4.155 0 .75.75 0 1 1-1.06 1.06 1.438 1.438 0 1 0-2.035 2.035 1.44 1.44 0 0 0 2.035 0 .75.75 0 1 1 1.06 1.06 2.938 2.938 0 1 1-4.156-4.156M6.22 9.215a.75.75 0 0 1 .949.474l.718 2.152.827-2.18a.75.75 0 0 1 1.402 0l.827 2.18.719-2.152a.75.75 0 1 1 1.422.475L11.7 14.312a.75.75 0 0 1-1.412.029l-.872-2.3-.872 2.3a.75.75 0 0 1-1.412-.029l-1.385-4.148a.75.75 0 0 1 .474-.949"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWcOutline;
