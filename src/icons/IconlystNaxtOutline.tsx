import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystNaxtOutline = ({
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
      d="M19.25 5.021a.75.75 0 0 1 .75.75v12.456a.75.75 0 1 1-1.5 0V5.77a.75.75 0 0 1 .75-.75M6.282 5.542c.88-.5 1.969-.522 3.055-.09l.006.002a20.2 20.2 0 0 1 5.92 3.75l.004.003c.856.795 1.322 1.785 1.316 2.816-.005 1.03-.48 2.005-1.318 2.772-1.728 1.598-3.713 2.836-5.915 3.748-1.01.428-2.087.418-2.975-.053-.898-.476-1.513-1.378-1.665-2.544l-.001-.014c-.276-2.467-.281-5.102-.001-7.848l.002-.016c.137-1.11.69-2.025 1.572-2.526m-.083 2.702c-.269 2.643-.262 5.166 0 7.514.096.73.453 1.181.879 1.407.437.232 1.037.273 1.69-.004l.006-.003c2.052-.849 3.884-1.995 5.474-3.466l.003-.003c.578-.528.83-1.122.832-1.674.003-.55-.24-1.154-.834-1.706a18.7 18.7 0 0 0-5.468-3.464c-.752-.298-1.352-.23-1.758.001-.404.23-.733.683-.824 1.398"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystNaxtOutline;
