import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTidalOutline = ({
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
      d="M10.824 12.174c.633-.69 1.72-.69 2.353 0l1.953 2.13c.56.61.56 1.547 0 2.157l-1.953 2.131c-.633.69-1.72.69-2.353 0l-1.953-2.13a1.596 1.596 0 0 1 0-2.157zl.553.506zm1.247 1.013a.096.096 0 0 0-.141 0l-1.954 2.131a.096.096 0 0 0 0 .13l1.954 2.13a.096.096 0 0 0 .14 0l1.954-2.13a.095.095 0 0 0 0-.13z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.824 5.408c.633-.69 1.72-.69 2.353 0l1.953 2.131c.56.61.56 1.546 0 2.157l-1.953 2.13c-.633.69-1.72.69-2.353 0l-1.953-2.13a1.596 1.596 0 0 1 0-2.157zl.553.507zm1.247 1.014a.096.096 0 0 0-.141 0l-1.954 2.13a.096.096 0 0 0 0 .13l1.954 2.131a.096.096 0 0 0 .14 0l1.954-2.131a.095.095 0 0 0 0-.13z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.025 5.408c.632-.69 1.72-.69 2.352 0l1.954 2.131c.559.61.559 1.546 0 2.156l-1.954 2.131c-.632.69-1.72.69-2.352 0l-1.953-2.13a1.596 1.596 0 0 1 0-2.157zm1.246 1.014a.096.096 0 0 0-.14 0l-1.954 2.13a.096.096 0 0 0 0 .13l1.954 2.13a.096.096 0 0 0 .14 0l1.954-2.13a.096.096 0 0 0 0-.13zM4.623 5.408c.632-.69 1.72-.69 2.352 0L8.93 7.54c.559.61.559 1.546 0 2.156l-1.954 2.131c-.632.69-1.72.69-2.352 0l-1.954-2.13a1.596 1.596 0 0 1 0-2.157zM5.87 6.422a.096.096 0 0 0-.141 0l-1.954 2.13a.096.096 0 0 0 0 .13l1.954 2.13a.096.096 0 0 0 .14 0l1.954-2.13a.096.096 0 0 0 0-.13z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTidalOutline;
