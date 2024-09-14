import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTouchIdSearchBold = ({
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
      d="M4.43 16.162a1 1 0 0 0 .867-1.117 6 6 0 0 1-.046-.715V9.64A5.65 5.65 0 0 1 10.896 4a5.65 5.65 0 0 1 5.645 5.64 1 1 0 0 0 2 0c0-4.213-3.43-7.64-7.645-7.64S3.252 5.427 3.252 9.64v4.69c0 .322.023.654.062.965a1 1 0 0 0 1.117.867"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.896 5.69a4.443 4.443 0 0 0-4.437 4.44v.94a.999.999 0 1 0 2 0v-.94a2.44 2.44 0 0 1 2.437-2.44 1 1 0 1 0 0-2M8.459 13.87a1 1 0 1 0-2 0c0 1.374.625 2.648 1.714 3.498a.995.995 0 0 0 1.403-.173 1 1 0 0 0-.173-1.403 2.43 2.43 0 0 1-.944-1.922"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.896 9.04c-.553 0-1 .447-1 1v1.91a1 1 0 1 0 2 0v-1.91a1 1 0 0 0-1-1M12.739 7.066a1 1 0 0 0-.053 1.414c.416.447.645 1.033.645 1.65a1 1 0 1 0 2 0 4.4 4.4 0 0 0-1.178-3.01 1 1 0 0 0-1.414-.054M10.898 20a5.62 5.62 0 0 1-4.79-2.66 1 1 0 1 0-1.695 1.06 7.6 7.6 0 0 0 6.485 3.6 1 1 0 1 0 0-2M17.522 17.939a1 1 0 0 0-.058.052q-.004.003-.004.006a2.134 2.134 0 1 1 .062-.058m2.934 1.634-.937-.939a4.1 4.1 0 0 0 .652-2.224 4.14 4.14 0 0 0-4.133-4.14 4.14 4.14 0 0 0-4.134 4.14 4.137 4.137 0 0 0 4.134 4.13c.735 0 1.426-.194 2.026-.532l.976.977a.996.996 0 0 0 1.414.003.996.996 0 0 0 .002-1.414"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTouchIdSearchBold;
