import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystOperaBold = ({
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
      d="M9.882 19.42c-2.677-2.36-3.462-5.369-2.892-8.799.328-1.975 1.29-3.62 2.794-4.928 1.96-1.7 4.216-2.293 6.751-1.642.556.142 1.084.39 1.595.576-3.419-2.816-9.228-3.084-13.18.782-3.848 3.765-3.948 10.072-.178 14.01 3.793 3.96 9.691 3.943 13.364.922q-.08.036-.159.074c-2.684 1.36-5.847.987-8.095-.995"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.907 11.223c-.227-1.706-.92-3.214-2.013-4.538-.504-.61-1.117-.94-1.874-1.174a5.7 5.7 0 0 0-2.713-.154c-.508.09-1.003.225-1.49.5.181.06.323.101.46.155q.211.08.407.184c1.217.657 1.981 1.703 2.493 2.951a8.6 8.6 0 0 1 .495 4.994c-.445 2.29-1.445 4.181-3.825 5.04 1.81 1.085 4.867.736 6.17-.978 1.58-2.079 2.234-4.393 1.89-6.98"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystOperaBold;
