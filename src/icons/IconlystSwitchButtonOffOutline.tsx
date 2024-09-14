import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSwitchButtonOffOutline = ({
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
      d="M20.033 7.853c.44.472.717 1.176.717 2.073v5.678c0 .897-.278 1.6-.717 2.073-.434.466-1.081.767-1.95.767H6.917c-.868 0-1.515-.301-1.95-.767-.44-.472-.717-1.176-.717-2.073V9.926c0-.896.279-1.6.72-2.072.435-.467 1.083-.768 1.947-.768h11.167c.868 0 1.515.301 1.949.767m1.098-1.022c-.748-.803-1.809-1.245-3.047-1.245H6.917c-1.236 0-2.296.442-3.044 1.245-.743.796-1.123 1.888-1.123 3.095v5.678c0 1.207.378 2.298 1.12 3.095.748.803 1.809 1.245 3.047 1.245h11.166c1.239 0 2.3-.442 3.048-1.245.742-.797 1.119-1.889 1.119-3.096V9.927c0-1.206-.377-2.298-1.12-3.095"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.138 10.562c.145.155.258.41.258.782v2.84c0 .372-.114.628-.258.783-.139.149-.36.264-.701.264H8.422c-.342 0-.562-.115-.701-.264-.145-.155-.259-.41-.259-.783v-2.84c0-.37.114-.626.26-.782.14-.15.36-.265.7-.265h3.015c.341 0 .562.115.7.265m1.098-1.022c-.453-.486-1.087-.743-1.799-.743H8.422c-.712 0-1.345.257-1.798.742-.447.48-.662 1.123-.662 1.805v2.84c0 .682.214 1.325.66 1.805.453.486 1.088.742 1.8.742h3.015c.712 0 1.346-.256 1.799-.742.447-.48.66-1.123.66-1.805v-2.84c0-.681-.213-1.324-.66-1.804"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSwitchButtonOffOutline;
