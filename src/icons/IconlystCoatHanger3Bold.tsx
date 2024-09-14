import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoatHanger3Bold = ({
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
      d="M18.709 19.7H5.29A3.295 3.295 0 0 1 2 16.407c0-1.4.788-2.59 2.006-3.109l5.303-2.25a1 1 0 0 1 .781 1.84l-5.301 2.25A1.29 1.29 0 0 0 4 16.33c0 .791.579 1.37 1.29 1.37h13.419c.712 0 1.291-.579 1.291-1.29 0-.516-.318-.99-.793-1.185l-7.572-3.142a1 1 0 0 1-.617-.926l.001-.479A2.24 2.24 0 0 1 12.455 8.6c.503-.197.905-.765.71-1.472a1.17 1.17 0 0 0-.799-.782 1.2 1.2 0 0 0-1.074.2 1.19 1.19 0 0 0-.464.943 1 1 0 1 1-2 0c0-.999.454-1.92 1.245-2.529.793-.61 1.817-.806 2.805-.547a3.18 3.18 0 0 1 2.213 2.177c.446 1.607-.372 3.27-1.902 3.871a.3.3 0 0 0-.096.061l6.875 2.854A3.26 3.26 0 0 1 22 16.408a3.296 3.296 0 0 1-3.291 3.291"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoatHanger3Bold;
