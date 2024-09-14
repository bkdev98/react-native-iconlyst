import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBottleOutline = ({
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
      d="M8.684 3.5h-.282a.753.753 0 0 1-.75-.75c0-.41.336-.75.75-.75h7.003c.414 0 .75.34.75.75s-.336.75-.75.75h-.09v1.01c0 .37.13.72.365 1.01l1.36 1.64c.46.55.712 1.24.712 1.96v8.84c0 .97-.307 1.86-.918 2.52-.618.66-1.489 1.02-2.49 1.02H9.655c-1.004 0-1.876-.36-2.492-1.02-.611-.66-.916-1.55-.916-2.52V9.12c0-.72.252-1.41.71-1.96L8.32 5.52c.235-.29.364-.64.364-1.01zm5.132 0h-3.632v1.01c0 .72-.251 1.41-.711 1.97l-1.36 1.63c-.236.29-.365.64-.365 1.01v8.84c0 .66.205 1.16.514 1.5.302.32.76.54 1.394.54h4.687c.631 0 1.09-.22 1.393-.54.31-.34.515-.84.515-1.5V9.12c0-.37-.128-.72-.363-1v-.01l-1.362-1.64a3.06 3.06 0 0 1-.71-1.96z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBottleOutline;
