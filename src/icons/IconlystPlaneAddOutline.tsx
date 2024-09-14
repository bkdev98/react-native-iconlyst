import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPlaneAddOutline = ({
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
      d="M7.215 16.279a4.47 4.47 0 0 1-4.133-3.082l-.526-1.268a.75.75 0 0 1 1.384-.578l.293.706 1.678-.711 1.839-.78-2-4.851a.75.75 0 0 1 .44-.992c.185-.066.365-.136.542-.2a10 10 0 0 1 1.319-.44 2.7 2.7 0 0 1 2.469.763 187 187 0 0 1 3.5 3.12c.935-.384 2.03-.867 3.117-1.26a4.04 4.04 0 0 1 3.057.01 2.36 2.36 0 0 1 1.2 1.512c.449 1.6-.78 2.933-2.112 3.494a603 603 0 0 1-9.97 4.122 5.6 5.6 0 0 1-2.097.435M4.88 13.41c.879 1.369 2.179 1.718 3.872 1.037a591 591 0 0 0 9.946-4.113c.62-.261 1.467-.931 1.25-1.705a.87.87 0 0 0-.447-.585 2.56 2.56 0 0 0-1.86.069c-.961.347-1.874.743-2.97 1.226A1.42 1.42 0 0 1 13 9.066c-1.14-1.051-2.3-2.076-3.47-3.1-.557-.49-.9-.49-1.132-.432q-.495.128-.968.319L9.42 10.68a.75.75 0 0 1-.406.979c-.637.264-1.583.665-2.518 1.062-.565.245-1.127.48-1.616.689M19.118 21.219a.75.75 0 0 1-.75-.75v-1.422H16.99a.75.75 0 0 1 0-1.5h1.378v-1.42a.75.75 0 0 1 1.5 0v1.42h1.38a.75.75 0 0 1 0 1.5h-1.38v1.422a.75.75 0 0 1-.75.75M13.53 21.076H5.148a.75.75 0 1 1 0-1.5h8.382a.75.75 0 1 1 0 1.5"
    />
  </Svg>
);
export default IconlystPlaneAddOutline;
