import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMoonCloudyBulk = ({
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
      d="M21.982 11.796a.5.5 0 0 0-.438-.11c-2.358.539-5.005-.598-6.4-1.995-1.444-1.446-2.092-3.86-1.614-6.008a.503.503 0 0 0-.529-.607 8.54 8.54 0 0 0-6.494 3.953c-.917 1.46-1.337 3.142-1.266 4.858.006.155.183.239.316.158.67-.407 1.483-.666 2.456-.666 2.355 0 3.808 1.478 4.44 3.03a.2.2 0 0 0 .116.114c1.58.642 2.61 2.154 2.61 4.046 0 .353-.045.697-.127 1.03-.035.144.085.284.23.256 3.67-.705 6.565-3.802 6.871-7.642a.5.5 0 0 0-.17-.417"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.023 16.193a.23.23 0 0 1-.209-.206c-.094-.974-.863-2.612-2.8-2.612-1.94 0-2.709 1.638-2.803 2.612a.23.23 0 0 1-.208.206c-1.21.094-2.158.958-2.158 2.372 0 .96.574 1.79 1.4 2.17.346.14.692.19.954.19h5.623c.263 0 .61-.05.961-.19a2.38 2.38 0 0 0 1.396-2.17c0-1.414-.946-2.278-2.156-2.372"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMoonCloudyBulk;
