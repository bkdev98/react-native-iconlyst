import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHuaweiTwoTone = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.576 6.018c.148-.53.34-1.05.613-1.53.413.072.832.13 1.234.26 1.075.342 1.892 1.395 1.923 2.528.067 1.303-.479 2.526-1.022 3.678-.786 1.595-1.72 3.114-2.701 4.596a3 3 0 0 1-.355.435c-.187-1.437-.222-2.888-.274-4.336.011-1.888.094-3.797.582-5.631"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.232 7.184c.895.938 1.738 2.146 1.623 3.505-.107 1.113-.944 1.941-1.8 2.567-1.405 1.05-2.943 1.905-4.49 2.726-.34.175-.678.36-1.04.485 1.504-3.316 3.453-6.426 5.707-9.283"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.02 15.433a224 224 0 0 1 5.793-3.288c.61 1.728-.328 3.822-2.02 4.521-.422.168-.869.312-1.328.298-1.6-.016-3.202.023-4.8-.022.745-.562 1.567-1.01 2.355-1.51"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.004 17.41c.739.63 1.584 1.119 2.418 1.611.513.277 1.077.59 1.683.461 1.035-.155 1.754-1.016 2.282-1.851M11.425 6.018a6.8 6.8 0 0 0-.614-1.53c-.413.072-.832.13-1.234.26-1.075.342-1.892 1.395-1.923 2.528-.068 1.303.478 2.526 1.022 3.678.786 1.595 1.72 3.114 2.701 4.596q.156.235.355.435c.187-1.437.222-2.888.274-4.336-.011-1.888-.094-3.797-.582-5.631"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.768 7.184c-.894.938-1.738 2.146-1.623 3.505.107 1.113.944 1.941 1.8 2.567 1.405 1.05 2.943 1.905 4.49 2.726.34.175.678.36 1.04.485-1.504-3.316-3.453-6.426-5.707-9.283"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.98 15.433a224 224 0 0 0-5.793-3.288c-.61 1.728.328 3.822 2.02 4.521.422.168.869.312 1.328.298 1.6-.016 3.202.023 4.8-.022-.745-.562-1.566-1.01-2.355-1.51"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.996 17.41c-.739.63-1.584 1.119-2.418 1.611-.513.277-1.077.59-1.683.461-1.035-.155-1.754-1.016-2.282-1.851"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystHuaweiTwoTone;
