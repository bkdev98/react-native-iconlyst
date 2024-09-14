import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystArrowsBigArrowUpOutline = ({
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
      d="M12.143 3.814a.192.192 0 0 0-.286 0l-5.72 6.434h3.038a.75.75 0 0 1 .75.75v5.609c0 .106.086.191.192.191h3.766a.19.19 0 0 0 .192-.191v-5.609a.75.75 0 0 1 .75-.75h3.037zm1.121-.996-.56.498zl6.132 6.898c.7.788.141 2.032-.912 2.032h-2.91v4.859c0 .934-.757 1.691-1.691 1.691h-3.766a1.69 1.69 0 0 1-1.692-1.691v-4.859H5.516c-1.053 0-1.612-1.244-.912-2.032l6.132-6.898a1.69 1.69 0 0 1 2.528 0M8.443 21a.75.75 0 0 1 .75-.75h5.614a.75.75 0 0 1 0 1.5H9.193a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystArrowsBigArrowUpOutline;
