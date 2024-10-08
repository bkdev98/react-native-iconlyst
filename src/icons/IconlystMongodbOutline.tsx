import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMongodbOutline = ({
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
      d="M19.492 4.985a4.79 4.79 0 0 1 1.758 3.697v1.522c0 3.229-1.604 6.101-3.49 8.143-.947 1.025-1.985 1.863-2.969 2.449-.962.573-1.952.954-2.791.954s-1.83-.381-2.791-.954c-.984-.586-2.022-1.424-2.97-2.45-1.885-2.04-3.489-4.913-3.489-8.142a.75.75 0 0 1 .75-.75c-.516.205-.75.719-.75.73v.016-1.518a4.79 4.79 0 0 1 1.758-3.697 11.63 11.63 0 0 1 14.984 0m-.962 1.15a10.13 10.13 0 0 0-13.06 0l-.01.009a3.29 3.29 0 0 0-1.21 2.54v1.519c0 2.733 1.367 5.26 3.091 7.126.858.928 1.785 1.672 2.635 2.178.872.52 1.583.743 2.024.743.44 0 1.152-.223 2.024-.743.85-.506 1.777-1.25 2.635-2.178 1.724-1.866 3.09-4.392 3.09-7.125l.001-1.519a3.29 3.29 0 0 0-1.21-2.541z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.711 6.058a.75.75 0 0 1 .578 0c.621.259 1.516.8 2.27 1.612.76.818 1.414 1.954 1.434 3.383.02 1.432-.625 2.631-1.375 3.518-.748.886-1.648 1.52-2.272 1.845a.75.75 0 0 1-.692 0c-.624-.325-1.524-.96-2.272-1.845-.75-.887-1.396-2.086-1.376-3.518.02-1.429.675-2.566 1.435-3.384.754-.811 1.649-1.352 2.27-1.611m-1.17 2.632c-.588.632-1.021 1.43-1.035 2.384-.013.951.415 1.811 1.021 2.529.475.561 1.029 1 1.473 1.281.444-.282.998-.72 1.472-1.281.607-.718 1.035-1.578 1.021-2.529-.013-.954-.447-1.752-1.034-2.384A5.6 5.6 0 0 0 12 7.578c-.429.224-.982.599-1.459 1.112"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12 11.21a.75.75 0 0 1 .75.75v5.29a.75.75 0 0 1-1.5 0v-5.29a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMongodbOutline;
