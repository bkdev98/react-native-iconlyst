import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube6Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M6.737 8.633a.3.3 0 0 0 .3-.3v-.171a.75.75 0 0 1 1.5 0v.171a.3.3 0 0 0 .3.3h6.744a.16.16 0 0 0 .12-.062l4.16-4.612c.131-.146.09-.377-.094-.443a2.4 2.4 0 0 0-.822-.145h-9.68a3 3 0 0 0-.452.032c-.175.025-.3.21-.29.385.007.126.012.248.012.286v1.624a.75.75 0 0 1-1.5 0V4.543c0-.147-.18-.239-.284-.135L3.542 7.627c-.182.18-.337.38-.47.591-.118.186.026.415.246.415zM18.788 16.777a.75.75 0 0 1 0-1.5H21.2c.165 0 .3-.129.3-.294V5.93c0-.285-.052-.557-.141-.812-.069-.196-.319-.227-.458-.073l-4.072 4.513a.4.4 0 0 0-.09.246v11.37c0 .243.27.381.445.214q.032-.03.063-.063l3.214-3.203c.28-.283.5-.606.666-.954.089-.186-.056-.39-.262-.39zM9.893 16.777H8.286a.3.3 0 0 0-.233.11l-1.016 1.245a.745.745 0 0 1-1.055.108.75.75 0 0 1-.107-1.055l1.095-1.342a.3.3 0 0 0 .067-.19v-1.732a.75.75 0 1 1 1.5 0v1.056a.3.3 0 0 0 .3.3h1.056a.75.75 0 0 1 0 1.5m5.345 5.118v-4.818a.3.3 0 0 0-.3-.3h-2.277a.75.75 0 0 1 0-1.5h2.277a.3.3 0 0 0 .3-.3v-4.545a.3.3 0 0 0-.3-.3h-6.1a.3.3 0 0 0-.3.3v.582a.75.75 0 0 1-1.5 0v-.582a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3v9.378c0 .256.041.502.114.733.065.207.329.237.466.068l.985-1.214a.75.75 0 0 1 1.055-.109c.322.26.371.732.11 1.054l-1.159 1.43c-.118.145-.075.363.1.431.275.106.572.168.884.168h9.68q.11 0 .218-.01c.173-.017.3-.189.29-.362z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCube6Bold;
