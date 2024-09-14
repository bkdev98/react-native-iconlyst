import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPaperNegativeBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="nonzero"
      d="M13.252 2c.258 0 .456.21.456.46v3.22c0 1.83 1.495 3.33 3.307 3.34.752 0 1.346.01 1.802.01.307 0 .812-.01 1.237-.01.248 0 .446.2.446.45v8.04c0 2.48-1.99 4.49-4.455 4.49H8.173C5.6 22 3.5 19.89 3.5 17.29V6.51C3.5 4.03 5.5 2 7.965 2Zm1.01 10.24h-4.89a.745.745 0 0 0 0 1.49h4.89a.745.745 0 0 0 0-1.49m.888-9.334c0-.43.517-.645.813-.334 1.07 1.124 2.941 3.09 3.987 4.187a.477.477 0 0 1-.34.807c-.814.003-1.773 0-2.463-.007-1.095 0-1.997-.91-1.997-2.017Z"
    />
  </Svg>
);
export default IconlystPaperNegativeBold;
