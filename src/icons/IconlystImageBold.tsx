import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageBold = ({
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
      d="m20.924 18.113-1.854-3.03a2.4 2.4 0 0 0-1.876-1.152 2.42 2.42 0 0 0-2.038.844 1.4 1.4 0 0 1-1.144.498 1.42 1.42 0 0 1-1.099-.598l-2.019-2.835a2.4 2.4 0 0 0-2.055-1.018 2.42 2.42 0 0 0-1.983 1.153L3.08 18.107a2.4 2.4 0 0 0-.052 2.454 2.4 2.4 0 0 0 2.116 1.241h13.713c.89 0 1.68-.462 2.115-1.24a2.4 2.4 0 0 0-.047-2.45M16.878 9.317a3.26 3.26 0 0 0 3.26-3.258 3.263 3.263 0 0 0-3.26-3.26 3.263 3.263 0 0 0-3.259 3.26 3.26 3.26 0 0 0 3.26 3.258"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageBold;
