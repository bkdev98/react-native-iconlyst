import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWebPageCloseRemoveOutline = ({
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
      d="M4.181 3.87c.97-1.04 2.348-1.62 3.975-1.62h8.274c1.63 0 3.01.58 3.979 1.62.963 1.034 1.462 2.46 1.462 4.06v4.932a.75.75 0 0 1-1.5 0v-2.745H4.216v5.607c0 1.29.4 2.33 1.06 3.038.654.704 1.62 1.143 2.88 1.143h1.718a.75.75 0 0 1 0 1.5H8.156c-1.63 0-3.01-.58-3.978-1.62-.963-1.035-1.462-2.461-1.462-4.06V7.93c0-1.6.502-3.027 1.465-4.06m.035 4.747H20.37V7.93c0-1.29-.4-2.329-1.06-3.038-.654-.702-1.62-1.142-2.881-1.142H8.156c-1.255 0-2.221.44-2.877 1.143-.662.71-1.063 1.748-1.063 3.037zM5.94 6.482a.75.75 0 0 1 .75-.75h.056a.75.75 0 0 1 0 1.5H6.69a.75.75 0 0 1-.75-.75m2.439 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5H9.13a.75.75 0 0 1-.75-.75m2.438 0a.75.75 0 0 1 .75-.75h.055a.75.75 0 0 1 0 1.5h-.055a.75.75 0 0 1-.75-.75m4.196 10.003a.75.75 0 0 1 1.06 0l1.462 1.462 1.461-1.462a.75.75 0 1 1 1.06 1.061l-1.46 1.462 1.46 1.462a.75.75 0 0 1-1.06 1.06l-1.461-1.461-1.461 1.461a.75.75 0 0 1-1.061-1.06l1.461-1.462-1.461-1.462a.75.75 0 0 1 0-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWebPageCloseRemoveOutline;
