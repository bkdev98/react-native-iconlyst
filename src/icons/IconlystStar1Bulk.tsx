import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStar1Bulk = ({
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
      d="M3.923 4.068c.932-1 2.266-1.568 3.86-1.568h8.434c1.597 0 2.931.567 3.863 1.568.928.997 1.42 2.383 1.42 3.958v7.948c0 1.575-.492 2.961-1.42 3.958-.932 1-2.266 1.568-3.864 1.568H7.782c-1.597 0-2.93-.567-3.862-1.568-.928-.997-1.42-2.383-1.42-3.958V8.026c0-1.576.494-2.962 1.423-3.958"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M12.75 8.7a.75.75 0 0 0-1.5 0v1.968L9.568 9.646a.75.75 0 1 0-.779 1.282L10.556 12 8.79 13.074a.75.75 0 0 0 .78 1.282l1.68-1.021V15.3a.75.75 0 1 0 1.5 0v-1.967l1.68 1.022a.75.75 0 1 0 .78-1.282L13.444 12l1.767-1.073a.75.75 0 1 0-.78-1.282l-1.681 1.022z"
    />
  </Svg>
);
export default IconlystStar1Bulk;
