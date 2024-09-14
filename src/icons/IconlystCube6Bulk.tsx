import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCube6Bulk = ({
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
      d="M6.737 7.912a.3.3 0 0 0 .3-.3v-.17a.75.75 0 0 1 1.5 0v.17a.3.3 0 0 0 .3.3h6.744a.16.16 0 0 0 .12-.062l4.16-4.612c.131-.145.09-.376-.094-.442a2.4 2.4 0 0 0-.822-.146h-9.68a3 3 0 0 0-.452.033c-.175.024-.3.209-.29.385.007.126.012.248.012.285v1.624a.75.75 0 0 1-1.5 0V3.822c0-.147-.18-.238-.284-.135l-3.209 3.22q-.272.272-.47.59c-.118.187.026.415.246.415zM18.788 16.057a.75.75 0 0 1 0-1.5H21.2c.165 0 .3-.13.3-.295V5.21c0-.286-.052-.558-.141-.813-.069-.195-.319-.227-.458-.073L16.83 8.838a.4.4 0 0 0-.091.246v11.37c0 .242.27.38.445.213l.064-.062 3.213-3.203c.28-.284.5-.607.666-.954.089-.187-.056-.391-.262-.391z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.893 16.057H8.286a.3.3 0 0 0-.233.11l-1.016 1.245a.745.745 0 0 1-1.055.108.75.75 0 0 1-.107-1.055l1.095-1.342a.3.3 0 0 0 .067-.19v-1.732a.75.75 0 1 1 1.5 0v1.056a.3.3 0 0 0 .3.3h1.056a.75.75 0 0 1 0 1.5m5.345 5.117v-4.817a.3.3 0 0 0-.3-.3h-2.277a.75.75 0 0 1 0-1.5h2.277a.3.3 0 0 0 .3-.3V9.712a.3.3 0 0 0-.3-.3h-6.1a.3.3 0 0 0-.3.3v.582a.75.75 0 0 1-1.5 0v-.582a.3.3 0 0 0-.3-.3H2.8a.3.3 0 0 0-.3.3v9.378c0 .256.041.501.114.733.065.207.329.236.466.068l.985-1.214a.75.75 0 0 1 1.055-.109c.322.26.371.732.11 1.054l-1.159 1.429c-.118.146-.075.364.1.432.275.106.572.168.884.168h9.68q.11 0 .218-.01c.173-.017.3-.19.29-.362z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystCube6Bulk;
