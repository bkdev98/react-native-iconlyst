import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHexagonalCylinder1Bulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M19.625 7.29q0-.042-.002-.084c-.009-.213-.253-.307-.427-.185l-3.209 2.247-.051.033a.3.3 0 0 0-.152.259v4.98c0 .106.06.202.15.257q.025.015.048.031l3.323 2.326c.128.09.32.013.32-.143zM9.716 14.034a.3.3 0 0 0 .3.3h3.968a.3.3 0 0 0 .3-.3v-3.969a.3.3 0 0 0-.3-.3h-3.968a.3.3 0 0 0-.3.3zM14.285 21.43v-5.296a.3.3 0 0 0-.3-.3h-3.968a.3.3 0 0 0-.3.3v5.296c0 .096.046.192.14.209a1 1 0 0 0 .116.012h4.053q.06 0 .117-.012c.094-.017.141-.114.141-.21M16.257 16.85a.3.3 0 0 0-.472.246v3.28a.3.3 0 0 0 .472.246l2.347-1.643.043-.032c.147-.114.12-.34-.032-.447zM8.065 14.8a.3.3 0 0 0 .151-.26V9.56a.3.3 0 0 0-.15-.258l-.048-.03-3.213-2.25c-.174-.123-.419-.028-.428.185l-.002.083v9.72c0 .157.193.234.321.144l3.318-2.322zM8.216 17.097a.3.3 0 0 0-.472-.245L5.388 18.5c-.153.107-.179.334-.031.449l.042.031 2.345 1.642a.3.3 0 0 0 .472-.246z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.873 8.04c.21.144.471.225.73.225h4.793c.26 0 .522-.08.737-.23l3.45-2.415c.1-.07.118-.228.02-.299l-3.204-2.243a2.4 2.4 0 0 0-1.373-.428H9.974c-.492 0-.967.15-1.377.431l-3.2 2.241c-.097.071-.08.226.019.296z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHexagonalCylinder1Bulk;
