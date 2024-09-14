import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBallBaseball1Bold = ({
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
      d="M18.8 12.259a.75.75 0 0 1-.957.458 11 11 0 0 1-1.39-.601.751.751 0 0 1 .693-1.331c.38.198.783.372 1.196.517.39.138.595.566.458.957m-3.325-1.605a.747.747 0 0 1-1.057.084 10.924 10.924 0 0 1-1.177-1.181.75.75 0 1 1 1.14-.974q.237.277.5.54.247.246.51.474a.75.75 0 0 1 .084 1.057m-2.6-2.82a.747.747 0 0 1-1.01-.324 11 11 0 0 1-.611-1.44.75.75 0 0 1 1.42-.484c.145.424.322.84.526 1.239a.75.75 0 0 1-.324 1.01m-.62 10.967a.75.75 0 0 1-.955-.461 9 9 0 0 0-.517-1.195.751.751 0 0 1 1.332-.691c.236.455.439.924.602 1.392a.75.75 0 0 1-.462.955m-2.088-3.146a.75.75 0 0 1-.571-.262 9 9 0 0 0-.475-.513 10 10 0 0 0-.54-.498.75.75 0 0 1 .974-1.141 11 11 0 0 1 1.18 1.176.752.752 0 0 1-.568 1.238m-2.331-2.78a.75.75 0 0 1-1.01.325 9 9 0 0 0-1.24-.525.75.75 0 0 1 .485-1.42c.492.168.977.373 1.44.61a.75.75 0 0 1 .325 1.01m12.505.394a.75.75 0 0 1-.674-.82c.04-.412.4-.716.819-.673.23.023.463.026.696.024a.293.293 0 0 0 .292-.307 9.45 9.45 0 0 0-2.756-6.21 9.43 9.43 0 0 0-6.213-2.762.293.293 0 0 0-.307.292c-.001.216 0 .43.02.643a.75.75 0 1 1-1.492.138 9 9 0 0 1-.037-.648.297.297 0 0 0-.344-.291 9.428 9.428 0 0 0-7.685 7.692c-.031.179.109.34.291.344q.323.007.643.036a.75.75 0 1 1-.14 1.493 7 7 0 0 0-.636-.02.293.293 0 0 0-.292.306 9.45 9.45 0 0 0 2.757 6.212 9.42 9.42 0 0 0 6.21 2.762.293.293 0 0 0 .306-.293 7 7 0 0 0-.023-.7.75.75 0 1 1 1.493-.146q.033.357.04.716a.297.297 0 0 0 .345.29 9.4 9.4 0 0 0 5.064-2.63 9.43 9.43 0 0 0 2.624-5.068.293.293 0 0 0-.277-.34c-.281-.014-.65-.033-.724-.04"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBallBaseball1Bold;
